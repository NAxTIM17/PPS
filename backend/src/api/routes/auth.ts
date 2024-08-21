import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const router = Router();

export default function (app: Router) {
	app.use('/auth', router);

	router.post('/login', controllers.auth.loginUser);
	router.post('/register', controllers.auth.registerUser);
	router.post('/recover-account', controllers.auth.recoverAccount);
	router.get(
		'/recover-account',
		middlewares.auth.recoverAccountSession,
		controllers.users.getUser
	);
	router.post(
		'/recover-account/new-password',
		middlewares.auth.recoverAccountSession,
		middlewares.attachUser,
		controllers.auth.newPassword
	);
}
