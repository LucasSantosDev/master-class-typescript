"use strict";
// Singleton | Factory Method
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var Database = /** @class */ (function () {
    function Database(host, user, pass) {
        this.host = host;
        this.user = user;
        this.pass = pass;
    }
    Database.prototype.connect = function () {
        console.log("Conectando ao host: ".concat(this.host, " com user: ").concat(this.user));
    };
    Database.getDatabase = function (host, user, pass) {
        if (Database.database) {
            console.log("Retornando instância já criada");
            return Database.database;
        }
        console.log("Criando nova instância");
        return (Database.database = new Database(host, user, pass));
    };
    return Database;
}());
exports.Database = Database;
var db1 = Database.getDatabase("localhost", "root", "123456");
db1.connect();
var db2 = Database.getDatabase("localhost", "root", "123456");
db2.connect();
console.log(db1 === db2);
