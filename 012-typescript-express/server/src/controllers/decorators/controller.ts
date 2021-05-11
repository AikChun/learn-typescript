import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { Request, Response, NextFunction, RequestHandler } from 'express';

const bodyValidators = (keys: string[]): RequestHandler => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body) {
    res.status(422).send('Invalid Request');
    return;
  }
  for (let key of keys) {
    if (!req.body[key]) {
      res.status(422).send(`Missing field: ${key}`);
      return;
    }
  }
  next();
};

export const controller = (routePrefix: string) => (target: Function) => {
  const router = AppRouter.getInstance();
  for (let key in target.prototype) {
    const routeHandler = target.prototype[key];
    const path = Reflect.getMetadata(MetadataKeys.PATH, target.prototype, key);
    const method: Methods = Reflect.getMetadata(
      MetadataKeys.METHOD,
      target.prototype,
      key
    );

    const middlewares: RequestHandler[] =
      Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) || [];

    const keys =
      Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) || [];

    const validator = bodyValidators(keys);

    if (path) {
      router[method](
        `${routePrefix}${path}`,
        [...middlewares, validator],
        routeHandler
      );
    }
  }
};
