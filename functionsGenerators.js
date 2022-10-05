function* geradora1() {
  // Code here

  const values = ["Valor 1", "Valor 2", "Valor 3"];

  yield values[0];

  // Code here

  yield values[1];

  // Code here

  yield values[2];

  return true;
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

const g2 = geradora1();

for (let valor of g2) {
  console.log(valor);
}

function* contador() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const cont = contador();
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);

function* gerador3() {
  yield 0;
  yield 1;
  yield 2;
}

function* gerador4() {
  yield* gerador3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = gerador4();

for (let valor of g4) {
  console.log(valor);
}
