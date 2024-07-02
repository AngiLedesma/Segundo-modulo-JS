// EJERECICIO
// Haceidno  uso de bucles , recorre un array de (5) numeros y determinar cual es el mayor

const numeros = [89, 21, 1650, 4, 72, 324, 5, 87632, 65, 98, 4, 29];

let mayor = 0; //1650- 87632

console.log(numeros)
console.log(numeros[2])

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

console.log(`El nùmero mayor de los siguientes nùmeros: ${numeros} es ${mayor}`)

alert (`El nùmero mayor de los siguientes nùmeros: ${numeros} es ${mayor}`) //opcional si queremos un alerta
document.write (`El nùmero mayor de los siguientes nùmeros: ${numeros} es ${mayor}`) //opcional si queremos q se imprima en el doc