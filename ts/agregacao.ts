export class Carrinho {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProduto(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(private _nome: string, public preco: number) {}

  get nome(): string {
    return this._nome;
  }
}

const produto1 = new Produto("Camiseta", 49.9);
const produto2 = new Produto("Caneca", 1.9);
const produto3 = new Produto("Caneta", 0.9);
const carrinho = new Carrinho();
carrinho.inserirProdutos(produto1, produto2, produto3);

console.log(produto1.nome);
console.log(carrinho);
console.log(carrinho.valorTotal());
