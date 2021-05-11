import 'reflect-metadata';

const createRoute = (method: string) => (path: string) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  Reflect.defineMetadata('path', path, target, key);
  Reflect.defineMetadata('method', method, target, key);
};

export const get = createRoute('get');
export const post = createRoute('post');
