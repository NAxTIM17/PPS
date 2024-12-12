import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const router = Router();

export default function (app: Router) {
	app.use('/history', router);

	router.get(
		'/get',
		middlewares.auth.allPurpose,
		middlewares.attachUser,
		controllers.dashboard.getAllDashboard
	);
}
