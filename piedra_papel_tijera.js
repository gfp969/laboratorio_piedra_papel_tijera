function ppt(eleccionPpt) {
    const eleccionAleatoria = Math.floor(Math.random()*3)+1;

    if(eleccionPpt===1 && eleccionAleatoria===2){
        document.getElementById('respuesta').textContent ='Perdiste: Elegí papel ;)';
    } else if (eleccionPpt===2 && eleccionAleatoria===1){
        document.getElementById('respuesta').textContent ='Ganaste: saqué piedra :(';
    } else if (eleccionPpt===3 && eleccionAleatoria===1){
        document.getElementById('respuesta').textContent ='Perdiste: Elegí piedra ;)';
    } else if (eleccionPpt===1 && eleccionAleatoria===3){
        document.getElementById('respuesta').textContent ='Ganaste: saqué tijeras :(';
    } else if (eleccionPpt===2 && eleccionAleatoria===3){
        document.getElementById('respuesta').textContent ='Perdiste: Elegí tijeras ;)';
    } else if (eleccionPpt===3 && eleccionAleatoria===2){
        document.getElementById('respuesta').textContent ='Ganaste: saqué papel :(';
    } else {
        document.getElementById('respuesta').textContent ='Empatamos :|';
    }
}
























