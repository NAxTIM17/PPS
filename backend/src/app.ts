import cors from 'cors';
import express from 'express';

import middlewares from './api/middlewares';
import routes from './api/routes';
import db from './db';
import env from './config/env';

export default function () {
	const app = express();

	db.connectDB();

	app.disable('x-powered-by');
	app.use(express.urlencoded({ limit: '50mb', extended: true }));
	app.use(express.json({ limit: '50mb' }));
	app.use(cors());

	app.use(middlewares.logs);

	app.use(env.API_PREFIX, routes());

	app.use(middlewares.handleError);

	app.all('**', (_request, response) => {
		response.status(404).json({ message: 'Resource Not Found' });
	});

	return app;
}
