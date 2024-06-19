const nombre = prompt('Ingrese su nombre', '');
const edad = (parseInt('Ingrese su edad', ''));

if (Number.isNaN(edad)){
    console.log('Debes ingresar un nùmero')
} else if(edad >18) {
    console.log (`${nombre}, que tienes ${edad} annios, puedes conducir`)
} else {
    console.log(`${nombre}, al tener ${edad} annios NO puedes conducir`)
}