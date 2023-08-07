// Exercice 2

// 1-
let form = document.querySelector("form");
console.log(form);
// 2-
let first = document.getElementById("fname");
console.log(first);
let last = document.getElementById("lname");
console.log(last);

// 3-
let input1 = form.elements.firstname;
console.log(input1);
let input2 = form.elements.lastname;
console.log(input2);

// 4-

let btn = document.getElementById("submit");
let box = document.querySelector(".usersAnswer");

btn.addEventListener("click", function (e) {
  // because by default input submit reload the page
  e.preventDefault();

  if (first.value.length != 0) {
    let list1 = document.createElement("li");
    document.querySelector(".usersAnswer").appendChild(list1);
    list1.textContent = first.value;
  }
  if (last.value != 0) {
    let list2 = document.createElement("li");
    document.querySelector(".usersAnswer").appendChild(list2);
    list2.textContent = last.value;
  }
});

// Exercice 3

let allBoldItems;

function getBoldItems() {
  let boldElement = document.querySelectorAll("strong");
  allBoldItems = boldElement;
}


function highLight () {
  getBoldItems()
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "blue"
  }
}

function returnItemsToDefault() {
  getBoldItems()
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black"
  }
}


let paragraph = document.querySelector('p')

paragraph.addEventListener('mouseover', highLight)
paragraph.addEventListener('mouseout', returnItemsToDefault)