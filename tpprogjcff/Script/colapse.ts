// Boton Mostrar Mas o Mostrar Menos...
"use strict";
const btn1 = document.getElementById("button1") as HTMLButtonElement;
const collapseExample = document.getElementById("collapseExample") as HTMLParagraphElement;
btn1.addEventListener("click", tapado);

function tapado(): void {
    if (collapseExample.classList.contains("oculto")) {
      collapseExample.classList.remove("oculto");
      btn1.textContent = "Ver Menos";
    } else {
      collapseExample.classList.add("oculto");
      btn1.textContent = "Ver Más";
    }
  }  