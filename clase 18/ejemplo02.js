function getNameDias(mes) {
    if (Number.isNaN(mes)) return false
    //NaN > Not A Number
    //si no es un numero da falso > en un futuro dira: "Mes invalido"

    //si es menos a 1 y mayor a 12 > mes invalido
    if (mes < 1 || mes > 12) return false

    mes--;

    const data = [
        {
            nombre: 'Enero',
            dias: 31
        },
        {
            nombre: 'Febrero',
            dias: 31
        },
        {
            nombre: 'Marzo',
            dias: 31
        },
        {
            nombre: 'Abril',
            dias: 30
        },
        {
            nombre: 'Mayo',
            dias: 31
        },
        {
            nombre: 'Junio',
            dias: 30
        },
        {
            nombre: 'Julio',
            dias: 31
        },
        {
            nombre: 'Agosto',
            dias: 31
        },
        {
            nombre: 'Septiembre',
            dias: 30
        },

        {
            nombre: 'Octubre',
            dias: 31
        },
        {
            nombre: 'Noviembre',
            dias: 30
        },
        {
            nombre: 'Diciembre',
            dias: 31
        }


    ]

    return data[mes]
}


const numMes = parseInt(prompt('Ingrese el mes del annio', ''))

const resultado = getNameDias(numMes);

if (resultado){
    alert (`El  mes ${resultado.nombre} tiene ${resultado.dias} dias.`)
} else{
    alert ('Mes invalido')
}