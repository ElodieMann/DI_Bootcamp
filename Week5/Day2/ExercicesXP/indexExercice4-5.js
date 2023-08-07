// Exercice 4
let form = document.getElementById("MyForm");
let radius = form.elements.radius;
let volume = form.elements.volume;
let submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  volume.value = (4 / 3) * Math.PI * Math.pow(radius.value, 3);
});

// Exercice 5
const para = document.querySelector("div");
console.log(para);

para.addEventListener("click", function () {
  para.style.fontSize = "25px";
});
para.addEventListener("mouseover", function () {
  para.style.backgroundColor = "red";
});
para.addEventListener("mouseout", function () {
    para.style.transform = "translate(50px, 20px)"
});
para.addEventListener("dblclick", function () {
    para.style.display = "none"
});
