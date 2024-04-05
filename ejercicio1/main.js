document.body.classList.add(
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  "h-screen",
  "bg-gradient-to-r",
  "from-[purple]",
  "to-[pink]"
);
var tituloContainer = document.createElement("div");
tituloContainer.classList.add("mb-4");
document.body.appendChild(tituloContainer);
var titulo = document.createElement("h1");
titulo.classList.add("text-3xl");
titulo.textContent = "Mis canciones favoritas";
tituloContainer.appendChild(titulo);

document.addEventListener("DOMContentLoaded", function () {
  // Crear el contenedor de la lista de canciones
  var listaCancionesContainer = document.createElement("div");
  document.body.appendChild(listaCancionesContainer);

  // Crear la lista de canciones dentro del contenedor
  var listaCanciones = document.createElement("ul");
  listaCanciones.id = "listaCanciones";
  listaCancionesContainer.appendChild(listaCanciones);

  // Función para agregar una canción a la lista
  function agregarCancion() {
    var nombreCancion = prompt("Ingresa el nombre de la canción:");
    if (nombreCancion) {
      var nuevoElemento = document.createElement("li");
      nuevoElemento.textContent = nombreCancion;
      nuevoElemento.classList.add("cancion-item");
      nuevoElemento.style.fontSize = "20px";
      listaCanciones.appendChild(nuevoElemento);
    }
  }

  // Agregar canciones automáticamente al cargar la página
  for (var i = 0; i < 5; i++) {
    agregarCancion();
  }
});
