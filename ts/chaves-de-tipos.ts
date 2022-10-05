type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo["marca"]; // Pegando o tipo dentro de Veiculo.marca
  year: Veiculo["ano"];
  name: string;
};

const carro: Car = {
  brand: "Ford",
  year: "2020",
  name: "Nome do Carro",
};

console.log(carro);
