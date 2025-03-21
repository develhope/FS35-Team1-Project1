// JS HEADER ALFONSO

// Tooltip aperto al passaggio del mouse sulla Shopbag (full-Screen)

const target = document.getElementById("target");
const tooltip = document.getElementById("tooltip");

target.addEventListener("mouseover", () => {
  tooltip.style.display = "block";
});
target.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
});

// Tooltip aperto al passaggio del mouse sulla Shopbag (Mobile)

const target2 = document.getElementById("target2");
const tooltip2 = document.getElementById("tooltip2");

target2.addEventListener("mouseover", () => {
  tooltip2.style.display = "block";
});
target2.addEventListener("mouseleave", () => {
  tooltip2.style.display = "none";
});


// Apertura del menu' Hamburger

const menuHamburger = document.getElementById("menuHamburger");
const hiddenMenu = document.getElementById("menu");
const barraNascosta = document.getElementById("barraNascosta");
const logoNascosto = document.getElementById("ln");
const wishNascosto = document.getElementById("wn");
const searchNascosto = document.getElementById("sn");
const profileNascosto = document.getElementById("pn");
const closer = document.getElementById("closer");

// Mostra il menu nascosto e nasconde gli altri elementi
menuHamburger.addEventListener("click", () => {
  menuHamburger.style.display = "none"; // Nasconde il menu hamburger
  hiddenMenu.style.display = "block";  // Mostra il menu nascosto
  barraNascosta.style.display = "none"; // Nasconde la barra nera
  logoNascosto.style.display = "none"; // Nasconde il logo
  wishNascosto.style.display = "none"; // Nasconde la wishlist
  searchNascosto.style.display = "none"; // Nasconde la ricerca
  profileNascosto.style.display = "none"; // Nasconde il profilo
  target2.style.display = "none"; // Nasconde la shopbag
});

// Chiude il menu nascosto e ripristina gli altri elementi
closer.style.width = "30px";
closer.style.height = "30px";
closer.style.bottom = "10px";

closer.addEventListener("click", () => {
  hiddenMenu.style.display = "none"; // Nasconde il menu nascosto
  menuHamburger.style.display = "block"; // Rende visibile il menu hamburger
  barraNascosta.style.display = "flex"; // Ripristina la barra nera
  logoNascosto.style.display = "block"; // Ripristina il logo
  wishNascosto.style.display = "block"; // Ripristina la wishlist
  searchNascosto.style.display = "block"; // Ripristina la ricerca
  profileNascosto.style.display = "block"; // Ripristina il profilo
  target2.style.display = "block"; // Ripristina la shopbag
});
