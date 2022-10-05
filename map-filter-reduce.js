const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const novosNumeros = numeros
  .filter((valor) => valor % 2 === 0) // Numeros pares
  .map((valor) => valor * 2) // Dobro
  .reduce((acumulador, valorAtual) => acumulador + valorAtual);

console.log(novosNumeros);

// [50, 80, 2, 8, 22] Pares
// [100, 160, 4, 16, 44] Dobro
// 324 Acumulado
