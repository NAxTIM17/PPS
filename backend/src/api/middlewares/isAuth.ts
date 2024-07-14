import jwt from 'jsonwebtoken';
import config from '../../config';

import type { Request, Response, NextFunction } from 'express';

export default function (request: Request, response: Response, next: NextFunction): void {
  if (
    !request.headers.authorization ||
    (request.headers.authorization &&
    request.headers.authorization.split(' ')?.[0] !== 'Bearer' &&
    request.headers.authorization.split(' ')?.[0] !== 'Token')
    ) {
      response.status(400).send({ message: 'No Auth Token Provided' });
      return;
    }

  const token = request.headers.authorization.split(' ')?.[1];

  jwt.verify(token, config.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      response.status(401).send({ message: 'Wrong/Expired Token'  });
      return;
    }

    response.locals.session = decoded;
    next();
  });
}
