import { AuthRequest } from '../controllers/types';
import { Response, NextFunction } from 'express';
import { User } from '../../models/User';
import messages from '../../config/messages';

export default async function (
	request: AuthRequest,
	response: Response,
	next: NextFunction
): Promise<void> {
	try {
		const user = await User.findById({ _id: request.user?.id }).select(
			'-password'
		);

		if (!user) {
			response.status(400).json({ message: messages.SERVER_ERROR });
			return;
		}

		const { _id, __v, ...restUser } = user;

		request.user = { ...request.user, ...restUser } as AuthRequest['user'];
		next();
	} catch (e) {
		const error = (e as { message?: string }).message ?? '';
		response
			.status(500)
			.json({ message: messages.SERVER_ERROR, reason: error });
	}
}
