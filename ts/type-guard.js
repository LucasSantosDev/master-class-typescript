"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    return Aluno;
}());
exports.Aluno = Aluno;
function mostraNome(obj) {
    if ("nome" in obj)
        console.log(obj.nome);
    if (obj instanceof Aluno)
        console.log(obj.nome);
}
mostraNome(new Aluno("Lucas"));
