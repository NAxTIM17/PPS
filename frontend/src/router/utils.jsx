import { AuthService } from '../services/Auth';
import { UsersService } from '../services/Users';

const authCheck = async () => {
	const user = await UsersService.getUser();
	return { user };
};

const recoverAccountSessionValidityCheck = async ({ params }) => {
	const user = await AuthService.validateRecoverAccountSession(params.token);
	return { user, token: params.token };
};

const pipeLoaders = async (loaders = [], { request, params }) => {
	let returns = {};

	for (const loader of loaders) {
		r = { ...r, ...loader?.({ request, params }) };
	}

	return returns;
};

export { authCheck, recoverAccountSessionValidityCheck, pipeLoaders };
