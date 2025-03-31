const tornaSu = document.getElementById("tornasu");
tornaSu.addEventListener("click", function (e) {
  e.preventDefault(); // Previene il comportamento predefinito del link
  window.scrollTo({
    top: 0, // Posizione in alto
    behavior: "smooth", // Scorrimento morbido
});
});