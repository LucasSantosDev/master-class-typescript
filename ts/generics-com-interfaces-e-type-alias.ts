interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: "Lucas",
  sobrenome: "Santos",
  idade: 26,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 123123,
  idade: 26,
};

console.log(aluno1, aluno2);
