import { Request, Response, NextFunction } from 'express';
import config from '../../config';

export default function (error: Error, _request: Request, response: Response, next: NextFunction): void {
  if (error) {
    !config.IS_PROD && console.log(error);

    response.status(500).send({ message: `Server Error: ${error.message}` }).end();
  }

  next();
}
