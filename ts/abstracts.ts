export abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} está acabando...`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  bordao() {
    console.log("Guuuuuueeeeeerrreeiiiraaaaaaa AAAAAaaaaaoooo Aaataqueeeee");
  }
}
export class Monstro extends Personagem {
  bordao() {
    console.log("ROOOOAOARRRRRRRRRRR");
  }
}

const guerreira = new Guerreira("Guerreiro 1", 100, 1000);
const monstro = new Monstro("Monstro 1", 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
