// Strings, number, undefined, null, boolean, symbol

const nome = 'Wanderson'; // string
const nome1 = 'Wanderson'; // string
const nome2 = `Wanderson`; // string
const num1 = 10; // number
const num2 = 10.52; //number
let nomeAluno; // undefined = não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo = não aponta para local nenhum na memória
const aprovado = false; // Bolean = true, false (lógico)

const a = [1, 2];
const b = a

console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

console.log(a, b);

let aa = 2;
const bb = aa;

console.log(aa, bb);

aa = 3;
console.log(aa, bb);
