import cors from 'cors';
import express from 'express';

import middlewares from './api/middlewares';
import config from './config';
import routes from './api/routes';
import db from './db';

export default function () {
  const app = express();

  db.connectDB();

  app.disable('x-powered-by');
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  app.use(middlewares.logs);

  app.use(config.API_PREFIX, routes());

  app.use(middlewares.handleError);

  app.all('**', (_request, response) => {
    response.status(404).json({ message: 'Resource Not Found' });
  });

  return app;
}
