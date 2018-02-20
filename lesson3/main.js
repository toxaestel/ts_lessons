var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnyPoint = /** @class */ (function () {
    function AnyPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    AnyPoint.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    return AnyPoint;
}());
var varPoint = {
    x: 5,
    y: 5,
    length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDistanceToStart = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.prototype.toString = function () {
        return 'x = ' + this.x + ', y = ' + this.y;
    };
    Point.origin = new Point(0, 0);
    return Point;
}());
var point = new Point(5, 5), result = point.getDistanceToStart();
console.log(result);
var originValue = Point.origin;
console.log(originValue);
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.getDistanceToStart = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point2.origin = new Point(0, 0);
    return Point2;
}());
Point2.x = 7;
Point2.y = 10;
result = Point2.getDistanceToStart();
console.log(result);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["gray"] = 3] = "gray";
    Color[Color["black"] = 4] = "black";
    Color[Color["white"] = 5] = "white";
    Color[Color["yellow"] = 6] = "yellow";
})(Color || (Color = {}));
var coloredPoint = /** @class */ (function (_super) {
    __extends(coloredPoint, _super);
    function coloredPoint(x, y, color) {
        var _this = _super.call(this, x, y) || this;
        _this.x = x;
        _this.y = y;
        _this.color = color;
        return _this;
    }
    coloredPoint.prototype.getColor = function () {
        return this.color;
    };
    coloredPoint.prototype.toString = function () {
        return _super.prototype.toString.call(this) + ' color=' + Color[this.color];
    };
    return coloredPoint;
}(Point));
var colorPoint = new coloredPoint(3, 5, Color.black);
console.log(colorPoint.toString());
var base = colorPoint;
console.log(base.toString());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        console.log('slithering');
    };
    return Snake;
}(Animal));
var snake = new Snake('snake');
snake.move(5);
