function getColor(element) {
  let styles_applied = window.getComputedStyle(element);
  return styles_applied["backgroundColor"];
}

let colors = document.querySelectorAll(".color");
let colorable = document.querySelectorAll(".colorable");
let clear = document.querySelector("button");

let bgColor;

for (let color of colors) {
  color.addEventListener("click", function () {
    let bgColor = getColor(color);
    bgColor;
    for (let colorab of colorable) {
      colorab.addEventListener("mousedown", function () {
        colorab.style.backgroundColor = bgColor;
        colorab.addEventListener("mouseover", function () {
          colorab.style.backgroundColor = bgColor;
        });
      });
      clear.addEventListener("click", function () {
        colorab.style.backgroundColor = "white";
      });
    }
  });
}

