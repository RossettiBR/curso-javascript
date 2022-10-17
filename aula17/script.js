const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const texto5 = document.getElementById('texto5');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada:  ${numero ** 0.5}.</p>`
texto1.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`
texto2.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}.</p>`
texto3.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
texto4.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
texto5.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`