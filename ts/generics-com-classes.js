"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilha = exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return Pessoa;
}());
exports.Pessoa = Pessoa;
// const pessoa1 = new Pessoa("Lucas", 10);
// const pessoa2 = new Pessoa(["Lucas"], 10);
// const pessoa3 = new Pessoa(["Lucas"], { idade: 10 });
// const pessoa4 = new Pessoa<string, number>("Lucas", 10);
var Pilha = /** @class */ (function () {
    function Pilha() {
        this.contador = 0;
        this.elementos = {};
    }
    Pilha.prototype.push = function (elemento) {
        this.elementos[this.contador] = elemento;
        this.contador++;
    };
    Pilha.prototype.estaVazia = function () {
        return this.contador === 0;
    };
    Pilha.prototype.pop = function () {
        if (this.estaVazia())
            return undefined;
        this.contador--;
        var elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    };
    Pilha.prototype.tamanho = function () {
        return this.contador;
    };
    Pilha.prototype.mostrarPilha = function () {
        for (var chave in this.elementos) {
            console.log(this.elementos[chave]);
        }
    };
    return Pilha;
}());
exports.Pilha = Pilha;
var pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
var elemento = pilha.pop();
pilha.mostrarPilha();
