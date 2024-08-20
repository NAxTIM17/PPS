import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

import { UserInput } from '../../validators/User';
import { User } from '../../models/User';
import { UserSchema } from '../../validators/User';
import { timeToSeconds } from '../../utils';

import env from '../../config/env';
import messages from '../../config/messages';
import { signJwt } from './utils';
import users from './users';

import recoverAccountEmailTemplate from '../../templates/recoverAccountEmailTemplate';
import { AuthRequest } from './types';

async function registerUser(
	request: Request<{}, {}, UserInput>,
	response: Response
): Promise<void> {
	const { email, password } = request.body;

	const parseResult = UserSchema.safeParse({ email, password });

	if (!parseResult.success) {
		response.status(400).json({
			messages: parseResult.error.errors.map(
				(v) => `${v.path}: ${v.message}`
			),
		});
		return;
	}

	try {
		let user = await User.findOne({ email });

		if (user) {
			response
				.status(400)
				.json({ message: messages.USER_ALREADY_EXISTS });
			return;
		}

		user = new User({ email, password });

		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		await user.save();

		const payload = { user: { id: user.id } };

		const token = await signJwt(payload, env.JWT_SECRET_KEY as string);

		response.json({ token });
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response
			.status(500)
			.json({ message: messages.SERVER_ERROR, reason: error });
	}
}

async function loginUser(
	request: Request<{}, {}, UserInput>,
	response: Response
): Promise<void> {
	const { email, password } = request.body;

	try {
		const user = await User.findOne({ email });

		if (!user) {
			response.status(400).json({ message: messages.EMAIL_NOT_FOUND });
			return;
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			response
				.status(400)
				.json({ message: messages.INVALID_CREDENTIALS });
			return;
		}

		const payload = { user: { id: user.id } };

		const token = await signJwt(payload, env.JWT_SECRET_KEY as string);

		response.json({ token });
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response
			.status(500)
			.json({ message: messages.SERVER_ERROR, reason: error });
	}
}

async function recoverAccount(
	request: Request,
	response: Response
): Promise<void> {
	const { email } = request.body;

	if (!email) {
		response.status(400).send({
			message: messages.EMAIL_IS_REQUIRED,
		});
		return;
	}

	try {
		const user = await User.findOne({ email });

		if (!user) {
			response.status(400).send({
				message: messages.EMAIL_NOT_FOUND,
			});
			return;
		}

		const payload = { user: { id: user.id } };

		const token = await signJwt(
			payload,
			env.JWT_SECRET_KEY as string,
			timeToSeconds({ minutes: 15 })
		);

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: env.NODEMAILER.USER,
				pass: env.NODEMAILER.PASS,
			},
		});

		const mailOptions = {
			from: env.NODEMAILER.USER,
			to: user.email,
			subject: 'Recover password',
			html: recoverAccountEmailTemplate({
				mainLink: `${env.CLIENT_PATH}/recuperar-cuenta/${token}`,
				fallbackLink: ``,
				firstName: user.firstName,
				lastName: user.lastName,
			}),
		};

		transporter.sendMail(mailOptions, function (error: Error | null) {
			if (error) {
				response.status(500).json({
					message: messages.FAILED_TO_SEND_EMAIL,
					reason: error,
				});
			} else {
				response.status(200).json(messages.EMAIL_SENT_SUCCESSFULLY);
			}
		});
	} catch (error) {
		response.status(500).send({
			message: messages.SERVER_ERROR,
			reason: error,
		});
	}
}

async function newPassword(
	request: AuthRequest<
		{},
		{},
		{ newPassword?: string; confirmPassword?: string }
	>,
	response: Response
): Promise<void> {
	const { newPassword, confirmPassword } = request.body;

	if (newPassword !== confirmPassword) {
		response.status(400).json({ message: messages.UNMATCHING_PASSWORDS });
		return;
	}

	request.body.password = newPassword;
	users.updateUser(request, response);
}

export default {
	registerUser,
	loginUser,
	recoverAccount,
	newPassword,
};
