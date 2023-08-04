//1-
let div = document.querySelector("div");
div.style.backgroundColor = "lightblue";
div.style.padding = "20px";

//2-
let ul = document.querySelector("ul");

ul.firstElementChild.style.display = "none";

console.log(ul.firstElementChild);

ul.children[1].style.border = "1px solid black";

document.body.style.fontSize = "38px";

// BONUS
let x = ul.firstElementChild.textContent;

let y = ul.children[1].textContent;

if ((div.style.backgroundColor = "lightblue")) {
  alert(`Hello ${x} and ${y}`);
}
