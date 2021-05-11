"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
var use = function (middleware) { return function (target, key, desc) {
    var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.MIDDLEWARE, target, key) || [];
    Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.MIDDLEWARE, __spreadArray(__spreadArray([], middlewares), [middleware]), target, key);
}; };
exports.use = use;
