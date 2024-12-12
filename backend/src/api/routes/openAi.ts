import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const router = Router();

export default function (app: Router) {
	app.use('/openai', router);

	router.post(
		'/',
		middlewares.auth.allPurpose,
		middlewares.attachUser,
		controllers.openai.getData
	);
}
