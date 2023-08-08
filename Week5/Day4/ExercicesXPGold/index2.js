let item;
let actualX;
let actualY;

document.addEventListener("dragstart", function (e) {
  item = e.target;
  actualX = e.x;
  actualY = e.y;
});
document.addEventListener("dragover", function (e) {
  e.preventDefault();
});
document.addEventListener("drop", function (e) {
  e.preventDefault();
  let finalX = e.x - actualX;
  let finalY = e.y - actualY;
  let para = document.querySelector("p");
  para.style.transform = `translate(${finalX}px, ${finalY}px)`;
  para.style.fontSize = finalX / 10 + "px";
});
