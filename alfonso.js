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

// Apertura del menu' Hamburger

const menuHamburger = document.getElementById("menuHamburger");
const hiddenMenu = document.getElementById("menu");
const barraNascosta = document.getElementById("barraNascosta");
const logoNascosto = document.getElementById("ln");
const wishNascosto = document.getElementById("wn");
const searchNascosto = document.getElementById("sn");
const profileNascosto = document.getElementById("pn");
const closer = document.getElementById("closer");
const body = document.querySelector("body");

// Mostra il menu nascosto e nasconde gli altri elementi

menuHamburger.addEventListener("click", () => {
  body.style.overflowY = "hidden"; // Naconde lo scorrimento della pagina
  menuHamburger.style.display = "none"; // Nasconde il menu hamburger
  hiddenMenu.style.left = "0";  // Mostra il menu nascosto
  barraNascosta.style.display = "none"; // Nasconde la barra nera
  logoNascosto.style.display = "none"; // Nasconde il logo
  wishNascosto.style.display = "none"; // Nasconde la wishlist
  searchNascosto.style.display = "none"; // Nasconde la ricerca
  profileNascosto.style.display = "none"; // Nasconde il profilo
});

// Chiude il menu nascosto e ripristina gli altri elementi

closer.style.width = "30px";
closer.style.height = "30px";
closer.style.bottom = "10px";

closer.addEventListener("click", () => {
  body.style.overflowY = "auto"; // Ritorna lo scorrimento della pagina
  hiddenMenu.style.left = "-110vw"; // Nasconde il menu nascosto
  menuHamburger.style.display = "block"; // Rende visibile il menu hamburger
  barraNascosta.style.display = "flex"; // Ripristina la barra nera
  logoNascosto.style.display = "block"; // Ripristina il logo
  wishNascosto.style.display = "block"; // Ripristina la wishlist
  searchNascosto.style.display = "block"; // Ripristina la ricerca
  profileNascosto.style.display = "block"; // Ripristina il profilo
});


// Cambio Titolo 

const titolo = document.getElementById("barraNascosta");
const messaggi = ["FINO AL 40% DI SCONTO", "RESO E CAMBIO MERCE GRATUITI", "SPEDIZIONE STANDARD GRATUITA CON ADICLUB"];
let index = 0;


function cambiaTesto() {
  titolo.style.transition = "opacity 1s ease-in-out";
  titolo.style.opacity = 0.9;
  setTimeout(() => {
    titolo.innerText = messaggi[index];     // Cambia il testo
    titolo.style.opacity = 1;               // Ripristina l'opacità a 1
    index = (index + 1) % messaggi.length;  // Incrementa l'indice per passare al prossimo messaggio
  }, 1000);                                 // Torna al primo messaggio dopo aver raggiunto l'ultimo
}

setInterval(cambiaTesto, 5000);             // Imposta l'intervallo per cambiare il testo ogni 5 secondi
