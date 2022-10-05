var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const arrayNumeros = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros);
function promiseAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        return 1;
    });
}
function minhaPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(1);
                }, 1000);
            }
            catch (err) {
                reject(err);
            }
        });
    });
}
promiseAsync().then((res) => console.log(res + 1));
minhaPromise().then((res) => console.log(res + 1));
