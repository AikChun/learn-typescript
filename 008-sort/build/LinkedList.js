"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super.call(this) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (this.head === null) {
            this.head = node;
            return;
        }
        var curNode = this.head;
        while (curNode.next) {
            curNode = curNode.next;
        }
        curNode.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var curNode = this.head;
            while (curNode.next) {
                length += 1;
                curNode = curNode.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds.');
        }
        if (index == 0) {
            return this.head;
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds.');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty.');
        }
        return this.at(leftIndex).value > this.at(rightIndex).value;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftNodeValue = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = leftNodeValue;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
