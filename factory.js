class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Setter
  set nomeCompleto(name) {
    this.nome = name.split(" ").shift();
    this.sobrenome = name.split(" ").pop();
  }

  // Getter
  get nomeCompleto() {
    return `${this.nome.trim()} ${this.sobrenome.trim()}`;
  }

  nomeCompletoInverso() {
    return `${this.sobrenome.trim()} ${this.nome.trim()}`;
  }
}

const p1 = new Pessoa("João", "Marcos");

console.log(`Objeto: ${p1}`);
p1.nomeCompleto = "Lucas Santos";
console.log(`Nome completo: ${p1.nomeCompleto}`);
console.log(`Nome completo inverso: ${p1.nomeCompletoInverso()}`);

function recursivo(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursivo(max);
}

recursivo(0);
