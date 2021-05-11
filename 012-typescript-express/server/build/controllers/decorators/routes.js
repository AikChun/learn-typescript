"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
require("reflect-metadata");
var createRoute = function (method) { return function (path) { return function (target, key, desc) {
    Reflect.defineMetadata('path', path, target, key);
    Reflect.defineMetadata('method', method, target, key);
}; }; };
exports.get = createRoute('get');
exports.post = createRoute('post');
