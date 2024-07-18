import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const router = Router();

export default function (app: Router) {
  app.use('/users', router);

  router.get('/', middlewares.auth, controllers.users.getUser);
  router.put('/', middlewares.auth, controllers.users.updateUser);
  router.delete('/', middlewares.auth, controllers.users.deleteUser);
};
