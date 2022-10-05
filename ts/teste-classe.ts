export abstract class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    public readonly idade: number,
    private _cpf: string
  ) {}

  protected getNomeCompleto(type: string): string {
    return `${type.toUpperCase()}: ${this.nome.trim()} ${this.sobrenome.trim()}`;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, "");
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  abstract idadeValida(): boolean;
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return super.getNomeCompleto("aluno");
  }

  idadeValida(): boolean {
    return this.idade <= 18;
  }

  static ra(): string {
    return "RA AQUI";
  }
}

export class Professor extends Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = "000.000.000-00";

  getNomeCompleto(): string {
    return super.getNomeCompleto("professor");
  }

  idadeValida(): boolean {
    return this.idade > 18;
  }

  static criaProfessor(nome: string, sobrenome: string) {
    return new Professor(
      nome,
      sobrenome,
      Professor.idadePadrao,
      Professor.cpfPadrao
    );
  }
}

const aluno = new Aluno("Lucas", "Santos", 26, "546.445.647-37");
const professor = new Professor("André", "Dioniz", 50, "308.792.283-85");
const professor2 = Professor.criaProfessor("Professor 1", "Sobrenome 1");

aluno.cpf = "888.464.258-20";

console.log(
  aluno.getNomeCompleto(),
  aluno.idadeValida(),
  aluno.cpf,
  Aluno.ra()
);
console.log(professor.getNomeCompleto(), professor.idadeValida());
console.log(professor2);
