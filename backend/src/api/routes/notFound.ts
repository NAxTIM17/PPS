import { Router } from "express";

const router = Router();

export default function (app: Router) {
  app.use('/', router);

  router.get('/**', (_request, response) => {
    response.status(404).json({ message: 'Endpoint Not Found' });
  });
};
