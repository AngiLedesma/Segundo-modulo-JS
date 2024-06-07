const items = document.getElementsByClassName ('item')

console.log (items)

function cambiarVisibilidad(numItem){
   
    const item = items[numItem];

    if(item.style.visibiliity ==''){
        item.style.visibiliity = 'hidden';
    } else {
        item.style.visibiliity = '';
    }
}

