import type { Request, Response } from 'express';
import type { UserInput } from '../../validators/User';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config';
import nodemailer, { SentMessageInfo } from 'nodemailer';

import User from '../../models/User';
import { UserSchema } from '../../validators/User';

async function registerUser(
	request: Request<{}, {}, UserInput>,
	response: Response
): Promise<void> {
	const { username, email, password } = request.body;

	const parseResult = UserSchema.safeParse({ username, email, password });

	if (!parseResult.success) {
		response.status(400).json({
			messages: parseResult.error.errors.map(
				(v) => `${v.path}: ${v.message}`
			),
		});
		return;
	}

	try {
		let user = await User.findOne({ username });

		if (user) {
			response.status(400).json({ message: 'User already exists' });
			return;
		}

		user = new User({ username, email, password });

		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		await user.save();

		const payload = { user: { id: user.id } };

		jwt.sign(
			payload,
			config.JWT_SECRET_KEY,
			{ expiresIn: 360000 },
			(err, token) => {
				if (err) throw err;
				response.json({ token });
			}
		);
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response.status(500).json({ message: `Server error: ${error}` });
	}
}

async function loginUser(
	request: Request<{}, {}, Omit<UserInput, 'email'>>,
	response: Response
): Promise<void> {
	const { username, password } = request.body;

	try {
		const user = await User.findOne({ username });

		if (!user) {
			response.status(400).json({ message: 'Invalid Credentials' });
			return;
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			response.status(400).json({ message: 'Invalid Credentials' });
			return;
		}

		const payload = { user: { id: user._id } };

		jwt.sign(
			payload,
			config.JWT_SECRET_KEY,
			{ expiresIn: 360000 },
			(err, token) => {
				if (err) throw err;
				response.json({ token });
			}
		);
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response.status(500).json({ message: `Server Error: ${error}` });
	}
}

async function recoverPassword(
	request: Request,
	response: Response
): Promise<void> {
	const { email } = request.body;
	if (!email) {
		response.status(400).send({
			message: 'Email is required',
		});
		return;
	}
	try {
		const user = await User.findOne({ email });
		if (!user) {
			response.status(403).send({
				message: 'Email not found',
			});
			return;
		}
		/*
      const token = jwt.sign(
        { id : user.id },  
        config.JWT_SECRET_KEY, 
        { expiresIn: '1h' },
        (err, token) => {
          if (err) throw err;
          response.json( token )
        }
    )
        */
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'test@test.com', //process.env.EMAIL
				pass: 'qwerty1234', //process.env.PASSWORD
			},
		});
		const mailOptions = {
			from: 'advenir@gmail.com', //advenir@gmail.com
			to: user?.email,
			subject: 'Recover password',
			text: 'If you did not request this email, you can ignore it',
		};
		transporter.sendMail(
			mailOptions,
			function (err: Error | null, data: SentMessageInfo) {
				if (err) {
					console.log('Error: ' + err);
					response
						.status(500)
						.json({ message: 'Failed to send email' });
				} else {
					data.status(200).json('Email sent successfully');
					//response.status(200).json({ message: 'Email sent successfully' });
				}
			}
		);
	} catch (error) {
		response.status(500).send({
			message: 'An error has ocurred',
			error,
		});
	}
}

export default {
	registerUser,
	loginUser,
	recoverPassword,
};
