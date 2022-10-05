"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soma = exports.isNumber = void 0;
// type predicated
function isNumber(value) {
    return typeof value === "number"; // type guard
}
exports.isNumber = isNumber;
console.log(isNumber("123"), isNumber(123));
function soma() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var retorno = args.reduce(function (sum, value) {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);
    return retorno;
}
exports.soma = soma;
console.log(soma(1, 2, 3, "a"));
