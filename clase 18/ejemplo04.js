let a, b, resto;

[a, b] = [10, 20]

console.log(a) // q va a imprir'? 10
console.log(b) //= 20

[a, b, ...resto] = [10, 20, 30, 40, 50]

console.log(resto)

const vocales = ['a','e','i'];

console.log(vocales) // q va a imprimir ? a e i s

const vocalesCompletas = [...vocales, 'o', 'u'];

console.log(vocalesCompletas); // va a imprirmir a e i o u 