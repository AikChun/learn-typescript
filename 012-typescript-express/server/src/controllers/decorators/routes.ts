import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

const createRoute = (method: string) => (path: string) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
  Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
};

export const get = createRoute(Methods.GET);
export const post = createRoute(Methods.POST);
