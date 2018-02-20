var a = 6, b;
b = 5;
b = 'qwerty';
b = false;
console.log(a);
var oneString = '1', oneNumber = 1, isEqual = (oneString == oneNumber.toString());
console.log(isEqual);
var voidVar;
voidVar = null;
voidVar = undefined;
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["Closed"] = -1] = "Closed";
    orderStatus[orderStatus["Opened"] = 0] = "Opened";
    orderStatus[orderStatus["Pending"] = 1] = "Pending";
    orderStatus[orderStatus["Canceled"] = 0] = "Canceled";
})(orderStatus || (orderStatus = {}));
var enumVar = orderStatus.Pending;
enumVar = 0;
console.log(enumVar);
console.log(orderStatus[enumVar]);
var rect = {
    width: 50,
    height: 50
};
rect = {
    width: 50,
    height: 80
};
console.log(rect.height);
var anyVar;
anyVar = 5;
anyVar = 'string';
anyVar = orderStatus;
console.log(anyVar);
var array = ["Hello", "World!"];
array.push("5");
var anyArray = ["Hello", "World!"];
anyArray.push(5);
anyArray.push(rect);
console.log(anyArray);
function _add(x, y) {
    if (typeof y == "string") {
        return x.toString().concat(y);
    }
    return x + y;
}
console.log(_add(-3, "4"));
function _tempConvert(celsius, isF) {
    if (isF === void 0) { isF = true; }
    if (isF) {
        return celsius * (9 / 5) + 32;
    }
    return celsius + 273;
}
var t1 = _tempConvert(15), t2 = _tempConvert(15, false);
console.log(t1, t2);
function _addNumbers(firstNum) {
    var numbersArr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbersArr[_i - 1] = arguments[_i];
    }
    var sum = firstNum;
    for (var i = 0; i < numbersArr.length; i++) {
        sum += numbersArr[i];
    }
    return sum;
}
console.log(_addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));
function _procedureFunc(a, b, cb) {
    return cb(a, b);
}
console.log(_procedureFunc(2, 7, _addNumbers));
