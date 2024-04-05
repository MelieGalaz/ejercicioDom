const btn1 = document.getElementById("boton1");
const btn2 = document.getElementById("boton2");
const btn3 = document.getElementById("boton3");
const respuestaCorrecta = document.getElementById("respuestaCorrecta");
const respuestaIncorrecta = document.getElementById("respuestaIncorrecta");

btn1.addEventListener("click", () => {
  // Verificar el estado actual
  if (respuestaCorrecta.style.display === "block") {
    // Si está visible, ocultarlo
    respuestaCorrecta.style.display = "none";
    btn1.style.backgroundColor = ""; // Restaurar el color original si es necesario
  } else {
    // Si está oculto, mostrarlo
    respuestaCorrecta.style.display = "block";
    btn1.style.backgroundColor = "green";
  }
});

btn2.addEventListener("click", () => {
  // Verificar el estado actual
  if (respuestaIncorrecta.style.display === "block") {
    // Si está visible, ocultarlo
    respuestaIncorrecta.style.display = "none";
    btn2.style.backgroundColor = ""; // Restaurar el color original si es necesario
  } else {
    // Si está oculto, mostrarlo
    respuestaIncorrecta.style.display = "block";
    btn2.style.backgroundColor = "red";
  }
});

btn3.addEventListener("click", () => {
  // Verificar el estado actual
  if (respuestaIncorrecta.style.display === "block") {
    // Si está visible, ocultarlo
    respuestaIncorrecta.style.display = "none";
    btn3.style.backgroundColor = ""; // Restaurar el color original si es necesario
  } else {
    // Si está oculto, mostrarlo
    respuestaIncorrecta.style.display = "block";
    btn3.style.backgroundColor = "red";
  }
});
