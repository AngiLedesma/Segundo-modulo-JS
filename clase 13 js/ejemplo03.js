const valor1=prompt ('Ingrese primer numero', '') //10
const valor2=prompt ('Ingrese segundo numero', '') //15

const suma=valor1 + valor2; //10+15 no va a funcionar
const suma2=parseInt(valor1) + parseInt(valor2)

const producto= valor1 + valor2


console.log (suma) ; //no va a dar 25, va a dar 1015
console.log (suma2)