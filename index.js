// J.S HEADER

const target = document.getElementById("target"); 
const tooltip = document.getElementById("tooltip");
const target2 = document.getElementById("target2");
const tooltip2 = document.getElementById("tooltip2");

target.addEventListener("mouseover", () => {
  tooltip.style.display = "block";
});

// Nasconde il tooltip
target.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
});

target2.addEventListener("mouseover", () => {
  tooltip2.style.display = "block";
});

// Nasconde il tooltip
target2.addEventListener("mouseleave", () => {
  tooltip2.style.display = "none";
});
