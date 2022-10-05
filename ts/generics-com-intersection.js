function unirObjetos(obj1, obj2) {
    // return { ...obj1, ...obj2 };
    return Object.assign({}, obj1, obj2);
}
const obj1 = { chave1: "valor 1" };
const obj2 = { chave2: "valor 2" };
const uniao = unirObjetos(obj1, obj2);
console.log(uniao);
