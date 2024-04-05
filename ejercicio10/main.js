const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");
const imagen4 = document.getElementById("imagen4");

imagen1.addEventListener("mousemove", () => {
  imagen1.style.width = "300px";
  imagen1.querySelector("img").style.width = "100%";
  imagen3.style.width = "100px";
  imagen2.style.width = "100px";
  imagen4.style.width = "100px";
});
imagen2.addEventListener("mousemove", () => {
  imagen2.style.width = "300px";
  imagen2.querySelector("img").style.width = "100%";
  imagen3.style.width = "100px";
  imagen4.style.width = "100px";
  imagen1.style.width = "100px";
});
imagen3.addEventListener("mousemove", () => {
  imagen3.style.width = "300px";
  imagen3.querySelector("img").style.width = "100%";
  imagen2.style.width = "100px";
  imagen1.style.width = "100px";
  imagen4.style.width = "100px";
});
imagen4.addEventListener("mousemove", () => {
  imagen4.style.width = "300px";
  imagen4.querySelector("img").style.width = "100%";
  imagen3.style.width = "100px";
  imagen1.style.width = "100px";
  imagen2.style.width = "100px";
});
