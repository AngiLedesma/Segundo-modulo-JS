const datosUsuarios = [
    {
        nombre: "Angi", password: "1234"
    },
    {
        nombre: "Laura",
        password: "5687"
    },
    {
        nombre: "Virginia",
        password: "04885"
    },
    {
        nombre: "Clara", password: "7536"
    }
]

console.log (datosUsuarios)


const soloPassword = datosUsuarios.map (function(p){
    return p.password
})



console.log (datosUsuarios)

const soloNombre = datosUsuarios.map (function(n){
    return n.nombre
})

console.log (soloNombre)