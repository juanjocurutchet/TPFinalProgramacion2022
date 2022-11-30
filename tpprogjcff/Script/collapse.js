// Boton Mostrar Mas o Mostrar Menos...
"use strict";
var btn1 = document.getElementById("button1");
var collapseExample = document.getElementById("collapseExample");
btn1.addEventListener("click", tapado);
function tapado() {
    if (collapseExample.classList.contains("oculto")) {
        collapseExample.classList.remove("oculto");
        btn1.textContent = "Ver Menos";
    }
    else {
        collapseExample.classList.add("oculto");
        btn1.textContent = "Ver Más";
    }
}
