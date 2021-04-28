"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var sorter = new Sorter_1.Sorter(new NumbersCollection_1.NumbersCollection([10, 3, -1, 0]));
sorter.sort();
console.log(sorter.collection);
