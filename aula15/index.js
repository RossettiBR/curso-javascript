// IEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

// console.log(num1.toString() + num2);
// num1 = num1.toString();
console.log(num1.toString(2));
console.log(`R$ ${num1.toFixed(2)}`);
console.log(Number.isInteger(num1));
let temp = num1 * 'olá';
console.log(temp);
console.log(Number.isNaN(temp));

num1 += num2;
console.log(num1);