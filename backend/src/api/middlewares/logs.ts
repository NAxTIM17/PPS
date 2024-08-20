import { Request, Response, NextFunction } from 'express';
import config from '../../config/env';

export default function (
	request: Request,
	_response: Response,
	next: NextFunction
) {
	if (!config.IS_PROD) {
		console.log(`[${request.method}]: '${request.url}' at '${Date.now()}'`);
	}

	next();
}
