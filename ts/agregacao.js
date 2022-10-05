"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = exports.Carrinho = void 0;
var Carrinho = /** @class */ (function () {
    function Carrinho() {
        this.produtos = [];
    }
    Carrinho.prototype.inserirProdutos = function () {
        var produtos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            produtos[_i] = arguments[_i];
        }
        for (var _a = 0, produtos_1 = produtos; _a < produtos_1.length; _a++) {
            var produto = produtos_1[_a];
            this.produtos.push(produto);
        }
    };
    Carrinho.prototype.quantidadeProduto = function () {
        return this.produtos.length;
    };
    Carrinho.prototype.valorTotal = function () {
        return this.produtos.reduce(function (soma, produto) { return soma + produto.preco; }, 0);
    };
    return Carrinho;
}());
exports.Carrinho = Carrinho;
var Produto = /** @class */ (function () {
    function Produto(_nome, preco) {
        this._nome = _nome;
        this.preco = preco;
    }
    Object.defineProperty(Produto.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.Produto = Produto;
var produto1 = new Produto("Camiseta", 49.9);
var produto2 = new Produto("Caneca", 1.9);
var produto3 = new Produto("Caneta", 0.9);
var carrinho = new Carrinho();
carrinho.inserirProdutos(produto1, produto2, produto3);
console.log(produto1.nome);
console.log(carrinho);
console.log(carrinho.valorTotal());
