// const array = [1,2,3];

// array.push(4);
// array[0] = 'Luiz';
// console.log(array);

// const nome = 'Wanderson';
// const sobrenome = 'Rossetti';
// const idade = 32;

// const pessoa = {
//     nome: 'Wander',
//     sobrenome: 'Rossetti',
//     idade: 32
// };

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa.idade);

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoal = criaPessoa('Wander', 'Rossetti', 32);
// console.log(pessoal);

const pessoa1 = {
    nome: 'Wander',
    sobrenome: 'Rossetti',
    idade: 32,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);      
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();