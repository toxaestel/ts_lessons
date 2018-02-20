interface IPoint {
    x: number;
    y: number;
    length(): number;
}

class AnyPoint implements IPoint {
    constructor (public x: number, public y: number) {}
    public length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let varPoint: IPoint = {
    x: 5,
    y: 5,
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};

class Point {
    constructor (public x: number, public y: number) {}
    public getDistanceToStart() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    static origin = new Point(0, 0);
    toString() {
        return 'x = ' + this.x + ', y = ' + this.y;
    }
}

let point = new Point(5, 5),
    result = point.getDistanceToStart();
console.log(result);

let originValue = Point.origin;
console.log(originValue);

class Point2 {
    public static x: number;
    public static y: number;

    public static getDistanceToStart() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    static origin = new Point(0, 0);
}

Point2.x = 7;
Point2.y = 10;

result = Point2.getDistanceToStart();
console.log(result);

enum Color {
    red,
    green,
    blue,
    gray,
    black,
    white,
    yellow
}

class coloredPoint extends Point {
    constructor(public x: number, public y: number, private readonly color: Color) {
        super(x, y);
    }
    getColor() {
        return this.color;
    }
    public toString() {
        return super.toString() + ' color=' + Color[this.color];
    }
}

let colorPoint = new coloredPoint(3, 5, Color.black);
console.log(colorPoint.toString());

let base = <Point>colorPoint;
console.log(base.toString());

abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract move(distance: number);
}

class Snake extends Animal {
    constructor(name: string){
        super(name);
    }
    move(distance) {
        console.log('slithering');
    }
}

let snake:Animal = new Snake('snake');
snake.move(5);