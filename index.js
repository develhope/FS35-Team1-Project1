// J.S HEADER

const target = document.getElementById("target"); 
const tooltip = document.getElementById("tooltip");


target.addEventListener("mouseover", () => {
  tooltip.style.visibility = "visible";
});

// Nasconde il tooltip
target.addEventListener("mouseleave", () => {
  tooltip.style.visibility = "hidden";
});

