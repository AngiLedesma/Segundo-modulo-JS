//let now = new Date ()
//alert(now); //muesrta en pantalla la fechay la hr actual 

//const dia = new Date();
//const hours = dia.getHours();

//console.log(hours); // 23

const nombre = prompt('Escribir tu nombre', '');

const today = new Date();

const hrs = today.getHours();

console.log(hrs)


if (hrs < 12) {
    document.write('Buenos dias' + nombre + '!!')
    console.log(`Buenos dias ${nombre} !!`)
} else if(hrs >= 12 && hrs <= 19) {
    document.write('Buenos tardes' + nombre + '!!')
    console.log(`Buenos tardes ${nombre} !!`)
} else {
    document.write('Buenos noches' + nombre + '!!')
    console.log(`Buenos noches ${nombre} !!`)
}