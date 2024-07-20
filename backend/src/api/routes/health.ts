import { Router } from 'express';

const router = Router();

export default function (app: Router) {
  app.use('/', router);

  app.get('/ping', (_request, response) => {
    response.status(200).json({ message: 'pong' });
  });
};
