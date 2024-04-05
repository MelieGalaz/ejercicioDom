const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");
const imagen4 = document.getElementById("imagen4");

imagen1.addEventListener("click", () => {
  imagen1.style.width = "300px";
  imagen1.querySelector("img").style.width = "100%";
  imagen3.style.width = "100px";
  imagen2.style.width = "100px";
  imagen4.style.width = "100px";
});
imagen2.addEventListener("click", () => {
  imagen2.style.width = "300px";
  imagen2.querySelector("img").style.width = "100%";
  imagen3.style.width = "100px";
  imagen4.style.width = "100px";
  imagen1.style.width = "100px";
});
imagen3.addEventListener("click", () => {
  imagen3.style.width = "300px";
  imagen3.querySelector("img").style.width = "100%";
  imagen2.style.width = "100px";
  imagen1.style.width = "100px";
  imagen4.style.width = "100px";
});
imagen4.addEventListener("click", () => {
  imagen4.style.width = "300px";
  imagen4.querySelector("img").style.width = "100%";
  imagen3.style.width = "100px";
  imagen1.style.width = "100px";
  imagen2.style.width = "100px";
});

// const imagenes = document.querySelectorAll(".contenedor");

// imagenes.forEach((imagen) => {
//   imagen.addEventListener("click", () => {
//     imagen.style.width = "300px";
//     imagenes.forEach((img) => {
//       if (img !== imagen) {
//         img.style.width = "100px";
//       }
//     });
//   });
// });
