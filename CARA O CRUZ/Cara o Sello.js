var aleatorio = Math.floor(Math.random() * 4);
var intentos = 0;
const resultadoTexto = numeroATexto(aleatorio);

var acierto = false;
alert("Bienvenido al juego cara y sello");

function numeroATexto(numero) {
    
    switch(numero) {
      case 0:
        return "cara";
      case 1:
        return "sello";
      case 2:
        return "cara";
      case 3:
        return "sello";

        default:
      return "Número no reconocido";
    }
}

function lanzarMoneda() {
    while(acierto == false && intentos < 3 ){
        var entrada = prompt("Adivina de que lado terminara la moneda, solo tienes 3 intentos.", "");
        var left = (window.screen.availWidth - 300) / 2; // 300 es el ancho predeterminado de la ventana emergente
        var top = (window.screen.availHeight - 200) / 2; // 200 es el alto predeterminado de la ventana emergente
        intentos++;
        if (entrada == aleatorio){
            var acertado = "Enhorabuena, has acertado el resultado. Has utilizado " + intentos  + " intentos.";
            alert(acertado);
            acierto = true;
            document.getElementById("aleatorio").innerHTML = "La respuesta es: " + resultadoTexto;
        }else{
            var fallado = "Vaya, no has acertado el resultado. Llevas " + intentos + " intentos.";
            alert(fallado);
        }
    }
    if (intentos == 3){
        alert("Has fallado. Game over.");
        document.getElementById("aleatorio").innerHTML = "El resultado era: " + resultadoTexto;
    }
}