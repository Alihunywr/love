function moveRandomEl(elm) {
  if (elm.parentElement.classList.contains('btn')) {
    document.body.appendChild(elm);
  }

  elm.style.position = "fixed"; 
  elm.style.zIndex = "1000"; 
  
  const top = Math.floor(Math.random() * 80 + 10);
  const left = Math.floor(Math.random() * 80 + 10);
  
  elm.style.top = top + "%";
  elm.style.left = left + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});