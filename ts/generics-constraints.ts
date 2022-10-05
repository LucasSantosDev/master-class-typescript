// Tipagem é igual a <O (generic), K (generic) que é no máximo do tipo O algo como O[k]>
type ObterChave = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChave = (objeto, chave) => objeto[chave];

const animal = {
  cor: "Rosa",
  vacinas: ["Vacina 1", "Vacina 2"],
  idade: 20,
};

const vacinas = obterChave(animal, "vacinas");
const cor = obterChave(animal, "cor");

console.log(vacinas, cor, obterChave(animal, "idade"));
