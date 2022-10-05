// Jeito não tão bom, pois tenho que manter a tipagem e o objeto

type CoresObj1 = {
  vermelho: string;
  verde: string;
  azul: string;
};

const coresObj1: CoresObj1 = {
  vermelho: "red",
  verde: "green",
  azul: "blue",
};

function traduzirCor1(cor: string, cores: CoresObj1) {
  return cores[cor];
}

console.log("1 >>> ", traduzirCor1("vermelho", coresObj1));

//======================================================================

const coresObj2 = {
  vermelho: "red",
  verde: "green",
  azul: "blue",
};

type CoresObj2 = typeof coresObj2;

type CoresChaves = keyof CoresObj2;

function traduzirCor2(cor: CoresChaves, cores: CoresObj2) {
  return cores[cor];
}

console.log("2 >>> ", traduzirCor2("vermelho", coresObj2));
