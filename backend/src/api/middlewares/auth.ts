import { Response, NextFunction } from 'express';
import { AuthRequest } from '../controllers/types';

import jwt from 'jsonwebtoken';
import env from '../../config/env';
import messages from '../../config/messages';
import { getTokenFromHeaders } from './utils';

function validateToken(
	request: AuthRequest,
	response: Response,
	next: NextFunction,
	invalidTokenMessage: string
): void {
	const token = getTokenFromHeaders(request);

	if (!token) {
		response.status(400).json({ message: messages.NO_AUTH_TOKEN_PROVIDED });
		return;
	}

	jwt.verify(token, env.JWT_SECRET_KEY, (err, decoded) => {
		if (err) {
			response.status(401).send({ message: invalidTokenMessage });
			return;
		}

		request.user = (decoded as any).user;
		next();
	});
}

export default {
	allPurpose: (
		request: AuthRequest,
		response: Response,
		next: NextFunction
	) =>
		validateToken(request, response, next, messages.WRONG_OR_EXPIRED_TOKEN),
	recoverAccountSession: (
		request: AuthRequest,
		response: Response,
		next: NextFunction
	) =>
		validateToken(
			request,
			response,
			next,
			messages.RECOVER_ACCOUNT_SESSION_INVALID
		),
};
