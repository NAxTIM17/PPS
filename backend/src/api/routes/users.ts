import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const router = Router();

export default function (app: Router) {
	app.use('/users', router);

	router.get('/', middlewares.auth.allPurpose, controllers.users.getUser);
	router.put('/', middlewares.auth.allPurpose, controllers.users.updateUser);
	router.delete(
		'/',
		middlewares.auth.allPurpose,
		controllers.users.deleteUser
	);
}
