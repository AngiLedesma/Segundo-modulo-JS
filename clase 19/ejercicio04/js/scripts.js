$(document).ready(function () { //cuando esta preparado el documento
    $window = $(window); // como llama Jquery al elemento

    $('#intro').height($window.height()); //intro es la imagen 1> alto
    $window.scroll(function () { //tengo en cuenta el moviemiento del scroll de los otros 3 div con la clase background > each es por cada elemento.
        $('div.background').each(function (index, item) {
            const $scroll = $(item);
            const yPos = - ($window.scrollTop() / $scroll.data('speed'));// eje coordenadas - es para arriba y segun la velocidad declarada se va moviendo .
            const coords = '50%' + yPos + 'px'; // x > 50% y possicion y sale dinaminca segun valor/ veloicicdad (data-speed)
            $scroll.css({backgroundPosition: coords}) //se lo aplico por css
        }) // fin de de la tercer funcion
    }) //fin de la segunda funcion

})//fin de la funcion