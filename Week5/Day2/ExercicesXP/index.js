// Exercice 1

// 1-
let title = document.querySelector("h1");

// 2-
let article = document.querySelector("article");
article.removeChild(article.lastElementChild);

// 3-
let h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "green";
});

// 4-

let h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
  h3.style.display = "none";
});

// 5-
let button = document.createElement("button");
button.innerText = "I'm a button";
document.body.appendChild(button);

button.addEventListener("click", function () {
  article.style.fontWeight = "bold";
});

// 6-

title.addEventListener("mouseover", function () {
  title.style.fontSize = Math.floor(Math.random() * 101) + "px";
});


// 7-
let para = document.getElementById('fade');

para.addEventListener("mouseover", function () {
  para.classList.add("fadeInText");
});

