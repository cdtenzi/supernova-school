function ejemploIF(){

    var literal = document.getElementById('input1').value;

    if (literal){
        alert("Has escrito algo en la casilla de texto, es lo que sigue: "+ literal);
    } else {
        alert("no has escrito nada y la casilla de texto está vacía");
    }
}

function ejemploSwitch(){
    var literal = document.getElementById('input1').value;
    
    // isNaN() comprueba si una variable es No Numérica. Quiere decir que devolverá TRUE para cualquier cosa
    // que no sea un número. Por ejemplo: isNaN('hola!') => true, isNaN('100') => false

    if (!isNaN(literal)){
        alert("Has escrito algo en la casilla de texto, es lo que sigue: "+ literal);
    } else {
        alert("no has escrito nada y la casilla de texto está vacía");
    }
}