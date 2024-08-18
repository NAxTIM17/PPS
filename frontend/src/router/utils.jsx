import { UsersService } from '../services/Users';

const authCheck = async () => {
	const user = await UsersService.getUser();
	return { user };
};

export { authCheck };
