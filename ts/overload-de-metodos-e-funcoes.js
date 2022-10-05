var adder = function (x, y) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (args.length > 0)
        return args.reduce(function (s, v) { return s + v; }, 0) + x + (y || 0);
    return x + (y || 0);
};
console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3, 4, 5, 6));
