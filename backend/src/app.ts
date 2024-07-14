import cors from 'cors';
import express from 'express';

import middlewares from './api/middlewares';

export default function () {
  const app = express();

  app.disable('x-powered-by');
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  app.use(middlewares.logs);

  // Unauthed routes
  
  app.use(middlewares.isAuth);

  app.use(middlewares.handleError);

  return app;
}
