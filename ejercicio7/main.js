const btn = document.getElementById("boton");
const texto = document.getElementById("texto");
const titulo = document.getElementById("titulo");
const body = document.body;

btn.addEventListener("click", () => {
  if (body.classList.contains("modo-oscuro")) {
    btn.innerHTML = '<i class="fa-solid fa-sun"></i> Modo claro';
    body.classList.remove("modo-oscuro");
    body.style.backgroundColor = "white";
    texto.style.color = "black";
    titulo.style.color = "black";
    btn.style.color = "black";
  } else {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i> Modo oscuro';
    body.classList.add("modo-oscuro");
    body.style.backgroundColor = "black";
    texto.style.color = "white";
    titulo.style.color = "white";
    btn.style.color = "white";
  }
});
