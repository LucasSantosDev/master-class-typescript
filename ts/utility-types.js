var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// Tipo Record
var objeto1 = {
    nome: "Lucas",
    sobrenome: "Santos",
    idade: 30,
};
console.log(objeto1);
var objeto2 = {
    nome: "Lucas",
    sobrenome: "Santos",
    idade: 30,
};
console.log(objeto2);
var objeto3 = {
    nome: "Lucas",
    sobrenome: "Santos",
};
console.log(objeto3);
var objeto4 = {
    nome: "Lucas",
    sobrenome: "Santos",
    idade: 30,
};
// objeto4.idade = 50; Not Work!!!
console.log(objeto4);
var objeto5 = {
    nome: "Lucas",
    idade: 30,
};
console.log(objeto5);
var accountMongo = {
    _id: "as12-asd132sa-dasfasf12-asdsada",
    nome: "Lucas",
    idade: 26,
};
function mapAccount(accountMongo) {
    var _id = accountMongo._id, accountData = __rest(accountMongo, ["_id"]);
    return __assign(__assign({}, accountData), { id: _id });
}
var accountAPI = mapAccount(accountMongo);
console.log(accountAPI);
