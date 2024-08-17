import { Request } from 'express';
import { UserInput } from '../../validators/User';

type AuthRequest<T = {}, J = {}> = Request<T, J, UserInput> & {
	user?: {
		id: string;
	};
};

export { AuthRequest };
