"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
var createRoute = function (method) { return function (path) { return function (target, key, desc) {
    Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.PATH, path, target, key);
    Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.METHOD, method, target, key);
}; }; };
exports.get = createRoute(Methods_1.Methods.GET);
exports.post = createRoute(Methods_1.Methods.POST);
