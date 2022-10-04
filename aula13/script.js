let umaString = 'Um texto'; // barra invertida \ para ter escape exemplo: "Um \"texto qualquer\""

console.log(umaString.charAt(5));
console.log(umaString.concat(' em', ' um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));
//expressão regulares
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outra'));

let umaString2 = 'O rato roeu a roupa do rei de Roma.'
console.log(umaString2.length)
console.log(umaString2.replace(/r/g, '#'));
console.log(umaString2.slice(2, 6));
console.log(umaString2.slice(-3));
console.log(umaString2.substring(umaString2.length -5, umaString2.length -1));
console.log(umaString2.slice(-5, -1));
console.log(umaString2.split(' ', 3));
console.log(umaString2.toUpperCase());
console.log(umaString2.toLowerCase());
