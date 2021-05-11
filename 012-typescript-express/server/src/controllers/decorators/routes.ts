import 'reflect-metadata';
import { RequestHandler, Router } from 'express';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

interface RouteHandlerDescriptor {
  value?: RequestHandler;
}

const createRoute = (method: string) => (path: string) => (
  target: any,
  key: string,
  desc: RouteHandlerDescriptor
) => {
  Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
  Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
};

export const get = createRoute(Methods.GET);
export const post = createRoute(Methods.POST);
