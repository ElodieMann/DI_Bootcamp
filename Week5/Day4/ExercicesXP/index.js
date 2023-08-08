// function sayHi() {
//   alert("Hello World");
// }

// setTimeout(sayHi, 2000);

let div = document.getElementById("container");

// function addP() {
//   let para = document.createElement("p");
//   para.textContent = "Hello World";
//   div.appendChild(para);
// }

// setTimeout(addP, 2000);

// let timer = setInterval(addP, 2000);

// document.getElementById("clear").addEventListener("click", function clear() {
//   clearInterval(timer);
// });

let numberChild = 0;
function newChild() {
  let para = document.createElement("p");
  para.textContent = "Hello World";
  div.appendChild(para);

  numberChild++;
  console.log(numberChild);
  if (numberChild === 5) {
    clearInterval(timer);
  }
}

let timer = setInterval(newChild, 2000);

