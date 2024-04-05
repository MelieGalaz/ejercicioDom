var barraInterior = document.getElementById("barraInterior");
var barraProgreso = document.getElementById("barraProgreso");

function actualizarTextoPorcentaje() {
  var anchoActual = parseInt(barraInterior.style.width) || 0;
  var porcentaje =
    Math.round((anchoActual / barraProgreso.offsetWidth) * 100) + "%";
  document.getElementById("texProgreso").innerText = porcentaje;
}

function incrementarProgreso() {
  var anchoActual = parseInt(barraInterior.style.width) || 0;
  var nuevoAncho = anchoActual + 24;
  if (nuevoAncho <= barraProgreso.offsetWidth) {
    barraInterior.style.width = nuevoAncho + "px";
    actualizarTextoPorcentaje();
    barraInterior.style.backgroundColor = "red";
  }
}

function disminuirProgreso() {
  var anchoActual = parseInt(barraInterior.style.width) || 0;
  if (anchoActual > 0) {
    barraInterior.style.width = anchoActual - 24 + "px";
    actualizarTextoPorcentaje();
  }
}
