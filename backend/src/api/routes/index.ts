import { Router } from 'express';

import health from './health';
import auth from './auth';
import users from './users';
import openai from './openAi';
import dashboard from './dashboard';

export default function (): Router {
	const app = Router();

	health(app);
	auth(app);
	users(app);
	openai(app);
	dashboard(app);

	return app;
}
