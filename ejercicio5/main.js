const textosSinNegrita = document.querySelectorAll(".text-a");

textosSinNegrita.forEach((texto) => {
  texto.addEventListener("click", () => {
    texto.style.color = "grey";
    texto.style.fontWeight = "normal";
  });
});
