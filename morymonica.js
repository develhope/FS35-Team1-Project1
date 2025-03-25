const containers = {
    "1": document.querySelector(".container-1"),
    "2": document.querySelector(".container-card-2"),
    "3": document.querySelector(".container-3"),
    "4": document.querySelector(".container-card-4"),
  };
  
  const buttons = [
    { left: ".arrow-left-1", right: ".arrow-right-1", container: "1" },
    { left: ".arrow-left-2", right: ".arrow-right-2", container: "2" },
    { left: ".arrow-left-3", right: ".arrow-right-3", container: "3" },
    { left: ".arrow-left-4", right: ".arrow-right-4", container: "4" },
  ];
  
  let scrollInterval;
  
  function startScrolling(containerId, direction) {
    stopScrolling();
    scrollInterval = setInterval(() => {
      containers[containerId].scrollLeft += direction * 10;
    }, 50); 
  }
  
  function stopScrolling() {
    clearInterval(scrollInterval);
  }
  

  buttons.forEach(({ left, right, container }) => {
    const buttonLeft = document.querySelector(left);
    const buttonRight = document.querySelector(right);
  
    buttonLeft.addEventListener("mouseenter", () => startScrolling(container, -1));
    buttonLeft.addEventListener("mouseleave", stopScrolling);
  
    buttonRight.addEventListener("mouseenter", () => startScrolling(container, 1));
    buttonRight.addEventListener("mouseleave", stopScrolling);
  });