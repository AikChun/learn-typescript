"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
var controller = function (routePrefix) { return function (target) {
    var router = AppRouter_1.AppRouter.getInstance();
    for (var key in target.prototype) {
        var routeHandler = target.prototype[key];
        var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.PATH, target.prototype, key);
        var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.METHOD, target.prototype, key);
        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
        if (path) {
            router[method].apply(router, __spreadArray(__spreadArray(["" + routePrefix + path], middlewares), [routeHandler]));
        }
    }
}; };
exports.controller = controller;
