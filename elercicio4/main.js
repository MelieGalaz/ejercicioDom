const btn1 = document.getElementById("boton1");
const btn2 = document.getElementById("boton2");
const btn3 = document.getElementById("boton3");
const btn4 = document.getElementById("boton4");
const btn5 = document.getElementById("boton5");
const btn6 = document.getElementById("boton6");
const contenedor = document.getElementById("contenedor");

btn1.addEventListener("click", () => {
  if (contenedor.style.backgroundColor === "red") {
    contenedor.style.backgroundColor = "white";
  } else {
    contenedor.style.backgroundColor = "red";
  }
});
btn2.addEventListener("click", () => {
  if (contenedor.style.backgroundColor === "orange") {
    contenedor.style.backgroundColor = "white";
  } else {
    contenedor.style.backgroundColor = "orange";
  }
});
btn3.addEventListener("click", () => {
  if (contenedor.style.backgroundColor === "purple") {
    contenedor.style.backgroundColor = "white";
  } else {
    contenedor.style.backgroundColor = "purple";
  }
});
btn4.addEventListener("click", () => {
  if (contenedor.style.backgroundColor === "blue") {
    contenedor.style.backgroundColor = "white";
  } else {
    contenedor.style.backgroundColor = "blue";
  }
});
btn5.addEventListener("click", () => {
  if (contenedor.style.backgroundColor === "pink") {
    contenedor.style.backgroundColor = "white";
  } else {
    contenedor.style.backgroundColor = "pink";
  }
});
btn6.addEventListener("click", () => {
  if (contenedor.style.backgroundColor === "turquoise") {
    contenedor.style.backgroundColor = "white";
  } else {
    contenedor.style.backgroundColor = "turquoise";
  }
});
