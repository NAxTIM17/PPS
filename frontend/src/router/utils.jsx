import { UsersService } from '../services/Users';

const authCheck = async () => {
	const user = await UsersService.getUser();
	return { user };
};

const recoverAccountTokenValidityCheck = async ({ params }) => {
	const user = await UsersService.getUserWithPassedToken(params.token);
	return { user };
};

const pipeLoaders = async (loaders = [], { request, params }) => {
	let returns = {};

	for (const loader of loaders) {
		r = { ...r, ...loader?.({ request, params }) };
	}

	return returns;
};

export { authCheck, recoverAccountTokenValidityCheck, pipeLoaders };
