const frutas = ['palta', 'sandia', 'banana', 'manzana']

//console.log (frutas) solas las frutas como apararencen
console.log(frutas.sort())

const frutasordenadas = frutas.sort();

console.log(frutasordenadas); //a a la z 

const frutasordenadasreves = frutas.sort().reverse(); //sort reverse () acomoda el array alafab o numericam De z a la a 

console.log(frutasordenadasreves)



const numeros = [82, 3, 39, 17, 56]

//console.log (numeros)

//console.log(numeros.sort())


const numerosordenados = numeros.sort(function (a, b) {
    return a - b
})

console.log(numerosordenados)






//console.log(numerosordenados); //de menos a mayor

//const numerosordenadosreves = numeros.sort (function (a, b) {
//    return b - a
//})

//console.log (numerosordenadosreves)

