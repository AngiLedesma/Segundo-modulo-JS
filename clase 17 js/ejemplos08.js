const alumnos = [
    {
        nombre: "Angi",
        edad: 3
    },
    {
        nombre: "Natalia",
        edad: 5
    },
    {
        nombre: "Leo",
        edad: 9
    },
    {
        nombre: "Laura",
        edad: 2
    },
    {
        nombre: "Sandra",
        edad: 4
    },
    {
        nombre: "Pedro",
        edad: 12
    }
]

console.log (alumnos)

const chicos = alumnos.filter(alumno => alumno >4) // si quiero q entre sandra >=

console.log(chicos)

// document.write (chicos) no imprime 

for(let i =0; i <chicos.length; i++){
    document.write(`<li> Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}</li>`)
}