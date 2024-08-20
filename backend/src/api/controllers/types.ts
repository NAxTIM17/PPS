import { Request } from 'express';
import { UserInput } from '../../validators/User';

type AuthRequest<T = {}, J = {}, K = {}> = Request<
	T,
	J,
	Partial<UserInput> & K
> & {
	user?: {
		id: string;
	} & UserInput;
};

export { AuthRequest };
