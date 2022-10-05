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
exports.MaquinaEscrever = exports.Caneta = exports.Ferramenta = exports.Escritor = void 0;
var Escritor = /** @class */ (function () {
    function Escritor(_nome) {
        this._nome = _nome;
        this._ferramenta = null;
    }
    Object.defineProperty(Escritor.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Escritor.prototype, "ferramenta", {
        get: function () {
            return this._ferramenta;
        },
        set: function (ferramenta) {
            this._ferramenta = ferramenta;
        },
        enumerable: false,
        configurable: true
    });
    Escritor.prototype.escrever = function () {
        if (!this.ferramenta) {
            console.log("Não posso escrever sem ferramenta");
            return;
        }
        this.ferramenta.escrever();
    };
    return Escritor;
}());
exports.Escritor = Escritor;
var Ferramenta = /** @class */ (function () {
    function Ferramenta(_nome) {
        this._nome = _nome;
    }
    Object.defineProperty(Ferramenta.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    return Ferramenta;
}());
exports.Ferramenta = Ferramenta;
var Caneta = /** @class */ (function (_super) {
    __extends(Caneta, _super);
    function Caneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Caneta.prototype.escrever = function () {
        console.log("".concat(this.nome, " est\u00E1 escrevendo..."));
    };
    return Caneta;
}(Ferramenta));
exports.Caneta = Caneta;
var MaquinaEscrever = /** @class */ (function (_super) {
    __extends(MaquinaEscrever, _super);
    function MaquinaEscrever() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaquinaEscrever.prototype.escrever = function () {
        console.log("".concat(this.nome, " est\u00E1 digitando..."));
    };
    return MaquinaEscrever;
}(Ferramenta));
exports.MaquinaEscrever = MaquinaEscrever;
var escritor = new Escritor("Luis");
var caneta = new Caneta("Bic");
var maquinaEscrever = new MaquinaEscrever("Alguma maquina");
console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);
escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
