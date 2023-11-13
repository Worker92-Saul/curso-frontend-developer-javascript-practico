const menuEmail = document.querySelector(".navbar-email");
const miniCuadro = document.querySelector(".desktop-menu");

const botonMovil = document.querySelector(".menu");
const menuMovilLeft = document.querySelector(".mobile-menu");
// document.getElementsByClassName regresa un alista de elementos, tendriamos que usar [0]

menuEmail.addEventListener('click',ocultarMinuCuadro);
botonMovil.addEventListener('click',ocultarMenuMovilLeft);

function ocultarMinuCuadro(){
    miniCuadro.classList.toggle("inactive");
}

function ocultarMenuMovilLeft(){
    menuMovilLeft.classList.toggle("inactive");
}