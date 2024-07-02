//ayuda: filter
const alumnos = [
    {
        nombre: 'Juan',
        nota: 7
    }, {
        nombre : 'Pedro',
        nota: 4
    }, {
        nombre : 'ROxana',
        nota: 8
    }, {
        nombre : 'Luciana',
        nota: 5
    } , {
        nombre : 'Fernando',
        nota: 6
    }, {
        nombre : 'Florencia',
        nota: 10
    }, {
        nombre : 'Raùl',
        nota: 7
    }, {
        nombre : 'Sandra',
        nota: 8
    }

]; 

console.log (alumnos)

const aprobados = alumnos.filter (function(alumno){
    return alumno.nota >=7 ; 
})

console.log (aprobados)
