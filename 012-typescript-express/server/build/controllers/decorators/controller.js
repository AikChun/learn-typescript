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
var bodyValidators = function (keys) { return function (req, res, next) {
    if (!req.body) {
        res.status(422).send('Invalid Request');
        return;
    }
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (!req.body[key]) {
            res.status(422).send("Missing field: " + key);
            return;
        }
    }
    next();
}; };
var controller = function (routePrefix) { return function (target) {
    var router = AppRouter_1.AppRouter.getInstance();
    for (var key in target.prototype) {
        var routeHandler = target.prototype[key];
        var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.PATH, target.prototype, key);
        var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.METHOD, target.prototype, key);
        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
        var keys = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.VALIDATOR, target.prototype, key) || [];
        var validator = bodyValidators(keys);
        if (path) {
            router[method]("" + routePrefix + path, __spreadArray(__spreadArray([], middlewares), [validator]), routeHandler);
        }
    }
}; };
exports.controller = controller;
