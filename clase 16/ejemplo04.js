const parrafo = document.getElementById('parrafo')
const menos = document.getElementById('menos')
const mas = document.getElementById('mas')

menos.addEventListener('click', function () {
    parrafo.style.fontSize = '10px';
})
mas.addEventListener('click', function () {
    parrafo.style.fontSize = '30px';
})
//pq no se usa la e? quien actuaria de e?
//font-size en css 
//fontSize