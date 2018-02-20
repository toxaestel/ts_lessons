let a: number = 6,
    b;
b = 5;
b = 'qwerty';
b = false;
console.log(a);

let oneString = '1',
    oneNumber = 1,
    isEqual = (oneString == oneNumber.toString());
console.log(isEqual);

let voidVar: void;
voidVar = null;
voidVar = undefined;

enum orderStatus {
    Closed = -1,
    Opened = 0,
    Pending = 1,
    Canceled = 0
}

let enumVar: orderStatus = orderStatus.Pending;
enumVar = 0;
console.log(enumVar);
console.log(orderStatus[enumVar]);

let rect = {
    width: 50,
    height: 50
};
rect = {
    width: 50,
    height: 80
};
console.log(rect.height);

let anyVar;
anyVar = 5;
anyVar = 'string';
anyVar = orderStatus;
console.log(anyVar);

let array: string[] = ["Hello", "World!"];
array.push("5");

let anyArray: any[] = ["Hello", "World!"];
anyArray.push(5);
anyArray.push(rect);
console.log(anyArray);

function _add(x: number, y: (number|string)): (number|string) {
    if (typeof  y == "string") {
        return x.toString().concat(y);
    }
    return x + y;
}

console.log(_add(-3, "4"));

function _tempConvert(celsius: number, isF: boolean = true): number {
    if (isF) {
        return celsius * (9 / 5) + 32;
    }
    return celsius + 273;
}

let t1 = _tempConvert(15),
    t2 = _tempConvert(15, false);
console.log(t1, t2);

function _addNumbers(firstNum: number, ...numbersArr: number[]): number {
    let sum = firstNum;
    for (let i = 0; i < numbersArr.length; i++) {
        sum += numbersArr[i];
    }
    return sum;
}
console.log(_addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

function _procedureFunc(a: number, b: number, cb:(a: number, b: number)=> number) {
    return cb(a, b);
}

console.log(_procedureFunc(2,7, _addNumbers));