// Jeito não tão bom, pois tenho que manter a tipagem e o objeto
var coresObj1 = {
    vermelho: "red",
    verde: "green",
    azul: "blue",
};
function traduzirCor1(cor, cores) {
    return cores[cor];
}
console.log("1 >>> ", traduzirCor1("vermelho", coresObj1));
//======================================================================
var coresObj2 = {
    vermelho: "red",
    verde: "green",
    azul: "blue",
};
function traduzirCor2(cor, cores) {
    return cores[cor];
}
console.log("2 >>> ", traduzirCor2("vermelho", coresObj2));
