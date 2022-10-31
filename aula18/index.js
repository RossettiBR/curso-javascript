const alunos = ['João', 'Maria', 'Luiz'];

alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos.slice(0, -1));
console.log(alunos);
console.log(typeof alunos);
console.log(alunos instanceof Array);


// delete alunos[1];
// const removido = alunos.pop();
// const remove = alunos.shift();
// console.log(removido);
// console.log(remove);

// alunos.shift(), // remove o primeiro elemento
// alunos.pop(); // retira o ultimo elemento no elemento
// alunos.unshift('Luiza'); // adiciona a frente 
// alunos.unshift('Fábio');// adiciona a frente
// alunos.push('Luiza');
// alunos.push('Fábio');
// alunos[alunos.length] = 'Luiza'; // adiciona no fim
// alunos[alunos.length] = 'Fábio'; // adiciona no fim
// alunos[alunos.length] = 'Luana';
// alunos[0] = 'Eduardo'; // altera str posição
// alunos[3] = 'Wanderson'; // adiciona str posição
// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);
