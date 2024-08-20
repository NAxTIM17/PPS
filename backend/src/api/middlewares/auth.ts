import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import env from '../../config/env';
import messages from '../../config/messages';

interface AuthRequest extends Request {
	user?: string;
}

export default function (
	request: AuthRequest,
	response: Response,
	next: NextFunction
): void {
	if (
		!request.headers.authorization ||
		(request.headers.authorization &&
			request.headers.authorization.split(' ')?.[0] !== 'Bearer' &&
			request.headers.authorization.split(' ')?.[0] !== 'Token')
	) {
		response.status(400).json({ message: messages.NO_AUTH_TOKEN_PROVIDED });
		return;
	}

	const token = request.headers.authorization.split(' ')?.[1];

	jwt.verify(token, env.JWT_SECRET_KEY, (err, decoded) => {
		if (err) {
			response
				.status(401)
				.send({ message: messages.WRONG_OR_EXPIRED_TOKEN });
			return;
		}

		request.user = (decoded as any).user;
		next();
	});
}
