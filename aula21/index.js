/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) -  Valores copiados
*/

// let nome = 'Luiz';
// nome[0] = 'R';
// console.log(nome[0], nome);

// let a = 'A';
// let b = a;
// console.log(a , b);

// a = 'Outra coisa';
// console.log(a, b);

/*
Referência (mutável) - array, object, function - Passados por referência
*/

// let a = [1, 2, 3];
// let b = a;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
const b = {...a};
a.nome = 'João';

console.log(b);
console.log(a);