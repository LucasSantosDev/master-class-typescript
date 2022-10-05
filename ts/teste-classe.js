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
exports.Professor = exports.Aluno = exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, idade, _cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this._cpf = _cpf;
    }
    Pessoa.prototype.getNomeCompleto = function (type) {
        return "".concat(type.toUpperCase(), ": ").concat(this.nome.trim(), " ").concat(this.sobrenome.trim());
    };
    Object.defineProperty(Pessoa.prototype, "cpf", {
        get: function () {
            return this._cpf.replace(/\D/g, "");
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aluno.prototype.getNomeCompleto = function () {
        return _super.prototype.getNomeCompleto.call(this, "aluno");
    };
    Aluno.prototype.idadeValida = function () {
        return this.idade <= 18;
    };
    Aluno.ra = function () {
        return "RA AQUI";
    };
    return Aluno;
}(Pessoa));
exports.Aluno = Aluno;
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.getNomeCompleto = function () {
        return _super.prototype.getNomeCompleto.call(this, "professor");
    };
    Professor.prototype.idadeValida = function () {
        return this.idade > 18;
    };
    Professor.criaProfessor = function (nome, sobrenome, cpf) {
        return new Professor(nome, sobrenome, 0, cpf);
    };
    return Professor;
}(Pessoa));
exports.Professor = Professor;
var aluno = new Aluno("Lucas", "Santos", 26, "546.445.647-37");
var professor = new Professor("André", "Dioniz", 50, "308.792.283-85");
var professor2 = Professor.criaProfessor("Professor 1", "Sobrenome 1", "123.123.123-12");
aluno.cpf = "888.464.258-20";
console.log(aluno.getNomeCompleto(), aluno.idadeValida(), aluno.cpf, Aluno.ra());
console.log(professor.getNomeCompleto(), professor.idadeValida());
console.log(professor2);
