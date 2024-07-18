import { Router } from "express";
import controllers from "../controllers";

const router = Router();

export default function (app: Router) {
  app.use('/auth', router);

  router.post('/login', controllers.auth.loginUser);
  router.post('/register', controllers.auth.registerUser);
};
