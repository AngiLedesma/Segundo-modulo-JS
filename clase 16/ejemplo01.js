const boton2 = document.getElementById ('boton');

boton2.addEventListener ('click', function (m){
    alert(m.currentTarget.innerText);
})