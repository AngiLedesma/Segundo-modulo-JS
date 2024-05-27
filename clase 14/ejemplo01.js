const nombre = prompt ('Ingrese su nombre')
const nota = parseInt( prompt ('Ingrese su nota'))

if(Number .isNaN (nota)) {
    document.write (`La nota ingresada no es valido`)
} else if (nota >=4) {
    document.write (`${nombre} estas aprobada con un ${nota}`)
    document.log (`${nombre} estas desaprobada con un ${nota}`)
} else{
    document.write (`${nombre} estas aprobada con un ${nota}`)
    document.log (`${nombre} estas desaprobada con un ${nota}`)
}