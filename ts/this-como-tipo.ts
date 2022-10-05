// Builder

export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  potencia(n: number) {
    this.numero **= n;
    return this;
  }
}

const calculadora = new Calculadora(10);
const subCalculadora = new SubCalculadora(10);
calculadora.add(5).mul(2);
subCalculadora.add(2).potencia(2);

console.log(calculadora, subCalculadora);
