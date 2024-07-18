import { Router } from "express";

import health from "./health";
import auth from "./auth";
import users from "./users";
import notFound from "./notFound";

export default function (): Router {
  const app = Router();
  
  health(app);
  auth(app);
  users(app);
  notFound(app);

  return app;
}
