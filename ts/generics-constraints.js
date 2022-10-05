const obterChave = (objeto, chave) => objeto[chave];
const animal = {
    cor: "Rosa",
    vacinas: ["Vacina 1", "Vacina 2"],
    idade: 20,
};
const vacinas = obterChave(animal, "vacinas");
const cor = obterChave(animal, "cor");
console.log(vacinas, cor, obterChave(animal, "idade"));
