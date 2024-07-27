import type { Request } from 'express';

interface AuthedRequest extends Request {
	user?: {
		id: string;
	};
}

export { AuthedRequest };
