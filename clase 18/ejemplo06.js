
const nombre = prompt('Ingrese su nombre', '')

const numMes = parseInt(prompt('Ingrese su edad', ''))

// if() {
//     if (Number.isNaN(mayormenor)) return false

//     if (mayormenor <= 18) return false
// }



if (Number.isNaN(edad)) {
    console.log('Debes ingresar un nùmero')
    } else if (edad >= 18) {
        alert(`Tenès màs de ${edad}, podes manejar.`)
        console.log (`${nombre}, que tienes ${edad} annios, puedes conducir `)
    } else {
        alert('No da!')
                console.log(`${nombre}, al tener ${edad} annios NO puedes conducir`)
    }
