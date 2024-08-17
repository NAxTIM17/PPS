import jwt from 'jsonwebtoken';
import config from '../../config';

import { Request, Response, NextFunction } from 'express';

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
		response.status(400).json({ message: 'No Auth Token Provided' });
		return;
	}

	const token = request.headers.authorization.split(' ')?.[1];

	jwt.verify(token, config.JWT_SECRET_KEY, (err, decoded) => {
		if (err) {
			response.status(401).send({ message: 'Wrong/Expired Token' });
			return;
		}

		request.user = (decoded as any).user;
		next();
	});
}
