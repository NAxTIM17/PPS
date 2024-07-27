import { Router } from 'express';

import health from './health';
import auth from './auth';
import users from './users';

export default function (): Router {
	const app = Router();

	health(app);
	auth(app);
	users(app);

	return app;
}
