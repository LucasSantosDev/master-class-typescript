export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

// const pessoa1 = new Pessoa("Lucas", 10);
// const pessoa2 = new Pessoa(["Lucas"], 10);
// const pessoa3 = new Pessoa(["Lucas"], { idade: 10 });
// const pessoa4 = new Pessoa<string, number>("Lucas", 10);

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];

    return elemento;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
const elemento = pilha.pop();
pilha.mostrarPilha();
