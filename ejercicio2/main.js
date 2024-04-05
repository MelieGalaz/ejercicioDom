let numero = 0;
const contadorElemento = document.getElementById("contador");

function actualizarContador(cantidad) {
  numero += cantidad;
  contadorElemento.textContent = numero;
}
