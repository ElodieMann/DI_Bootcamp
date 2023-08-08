let boxes = document.querySelectorAll('.box');
let item;
let actualX;
let actualY;

for (box of boxes) {
  box.addEventListener('dragstart', function (e) {
    item = e.target;
    actualX = e.clientX;
    actualY = e.clientY;
  });

  document.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  document.addEventListener('drop', function (e) {
    e.preventDefault();
    let x = e.x - actualX;
    let y = e.y - actualY;
    item.style.transform = `translate(${x}px, ${y}px)`;
  });
}
