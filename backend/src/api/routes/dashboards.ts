import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';
import upload from '../../config/multer';

const router = Router();

export default function (app: Router) {
	app.use('/dashboards', router);

	router.get(
		'/',
		middlewares.auth.recoverAccountSession,
		middlewares.attachUser,
		controllers.dashboards.getUserDashboards
	);
	router.post(
		'/new/upload/auto',
		upload.array('files'),
		controllers.dashboards.createNewFromAutoUpload
	);
	//router.post('/new/upload/manual', middlewares.auth.recoverAccountSession, middlewares.attachUser, controllers.auth.loginUser);
}
