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
exports.Monstro = exports.Guerreira = exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(nome, ataque, vida) {
        this.nome = nome;
        this.ataque = ataque;
        this.vida = vida;
    }
    Personagem.prototype.atacar = function (personagem) {
        this.bordao();
        console.log("".concat(this.nome, " est\u00E1 acabando..."));
        personagem.perderVida(this.ataque);
    };
    Personagem.prototype.perderVida = function (forcaAtaque) {
        this.vida -= forcaAtaque;
        console.log("".concat(this.nome, " agora tem ").concat(this.vida, " de vida..."));
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Guerreira = /** @class */ (function (_super) {
    __extends(Guerreira, _super);
    function Guerreira() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guerreira.prototype.bordao = function () {
        console.log("Guuuuuueeeeeerrreeiiiraaaaaaa AAAAAaaaaaoooo Aaataqueeeee");
    };
    return Guerreira;
}(Personagem));
exports.Guerreira = Guerreira;
var Monstro = /** @class */ (function (_super) {
    __extends(Monstro, _super);
    function Monstro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monstro.prototype.bordao = function () {
        console.log("ROOOOAOARRRRRRRRRRR");
    };
    return Monstro;
}(Personagem));
exports.Monstro = Monstro;
var guerreira = new Guerreira("Guerreiro 1", 100, 1000);
var monstro = new Monstro("Monstro 1", 87, 1000);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
