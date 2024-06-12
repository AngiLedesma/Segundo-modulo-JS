const empleados = [
    {
        nombre: "Angi",
        trabajo: "desarrollador"
    },
    {
        nombre: "Laura",
        trabajo: "abogada"
    },

    {
        nombre: "Daniela",
        trabajo: "maestra"
    },

    {
        nombre: "Cecilia",
        trabajo: "desarrollador"
    },

    {
        nombre: "Jere",
        trabajo: "maestro"
    },

    {
        nombre: "Leonel",
        trabajo: "veterinario"
    }


]

console.log(empleados)

const desarrollador = empleados.filter(
    emepleado=> emepleado.trabajo == 'desarrollador'
)
const nodesarrollador = empleados.filter(
    emepleado => emepleado.trabajo != 'desarrollador'
)


console.log(desarrollador)
console.log(nodesarrollador)
