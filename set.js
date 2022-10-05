let conjunto = new Set();
conjunto.add("test");
conjunto.add("test");
conjunto.add("test 2");
conjunto.delete("test");

console.log(conjunto.size);

for (let key of conjunto.values()) {
  console.log(key);
}

const arr = Array.from(conjunto);

console.log(arr);
const values = conjunto.values();
console.log(values);
console.log(values.next());
console.log([...conjunto][0]); // ACCESS ITEM OF SET

console.log(conjunto.has("test 2"));

conjunto.clear();
