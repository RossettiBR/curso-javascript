const nome = 'Wanderson';
const sobrenome = 'Rossetti';
const idade = 32;
const peso = 92;
const alturaEmM = 1.72;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${alturaEmM} m de altura e seu IMC é de ${imc}`);
console.log(nome, 'nasceu em', anoNascimento);
