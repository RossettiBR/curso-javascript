// Não podemos criar constantes com palavras declaradas
// Constantes precisam ter nomes significativos
// Não pode começar o nome da constante com número
// Não podem conter espaços ou traços
// Urtilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// Não UTILIZE VAR, UTILIZE CONST.
// + - * /
// String = Text | Number = Número

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado, resultadoDuplicado, resultadoTriplicado);
console.log(primeiroNumero)

console.log(typeof(primeiroNumero));