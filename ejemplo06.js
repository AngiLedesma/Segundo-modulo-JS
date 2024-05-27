const mes = parseInt(prompt('ingrese mes del anno', ''));


if (mes == 1 || mes == 2 || mes == 3) {
    console.log('corresponde al primer trimestre del anno')
}else if(mes == 4 || mes == 5 || mes == 6){
    console.log('corresponde al segundo trimestre del anno')
}else if(mes == 7 || mes == 8 || segundo == 9){
    console.log('corresponde al tercer trimestre del anno')
}else{
    console.log('corresponde al cuarto trimestre del anno')
}