import { Request, Response, NextFunction } from 'express';
import env from '../../config/env';
import messages from '../../config/messages';

export default function (
	error: Error,
	_request: Request,
	response: Response,
	next: NextFunction
): void {
	if (error) {
		!env.IS_PROD && console.log(error);

		response
			.status(500)
			.send({ message: messages.SERVER_ERROR, reason: error.message })
			.end();
	}

	next();
}
