// tsc -t es6 generics.ts && node generics.js

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];

console.log(arrayNumeros);

async function promiseAsync(): Promise<number> {
  return 1;
}

async function minhaPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}

promiseAsync().then((res) => console.log(res + 1));

minhaPromise().then((res) => console.log(res + 1));
