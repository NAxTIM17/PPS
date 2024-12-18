import { Response } from 'express';
import { OptionalUserInput, OptionalUserSchema } from '../../validators/User';
import { AuthRequest } from './types';
import { User } from '../../models/User';
import messages from '../../config/messages';
import bcrypt from 'bcryptjs';

async function getUser(request: AuthRequest, response: Response) {
	try {
		const user = await User.findById({ _id: request.user?.id }).select(
			'-password'
		);
		response.json({ user });
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response
			.status(500)
			.json({ message: messages.SERVER_ERROR, reason: error });
	}
}

async function updateUser(request: AuthRequest, response: Response) {
	const {
		name: newName,
		email: newEmail,
		password: newPassword,
	} = request.body;

	const parseResult = OptionalUserSchema.safeParse({
		name: newName === '' ? undefined : newName,
		email: newEmail === '' ? undefined : newEmail,
		password: newPassword === '' ? undefined : newPassword,
	});

	if (!parseResult.success) {
		response.status(400).json({
			messages: parseResult.error.errors.map(
				(v) => `${v.path}: ${v.message}`
			),
		});
		return;
	}

	const newUser: OptionalUserInput = {
		name: request.body.name ?? request.user?.name,
		email: request.body.email ?? request.user?.email,
	};

	if (newPassword) {
		const salt = await bcrypt.genSalt(10);
		newUser.password = await bcrypt.hash(newPassword, salt);
	}

	try {
		const user = await User.findByIdAndUpdate(
			{ _id: request.user?.id },
			newUser,
			{ new: true }
		).select('-password');
		response.json({ user });
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response
			.status(500)
			.json({ message: messages.SERVER_ERROR, reason: error });
	}
}

async function deleteUser(request: AuthRequest, response: Response) {
	try {
		await User.findByIdAndDelete({ _id: request.user?.id });
		response.json({ message: messages.USER_DELETED });
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response
			.status(500)
			.json({ message: messages.SERVER_ERROR, reason: error });
	}
}

export default {
	getUser,
	updateUser,
	deleteUser,
};
