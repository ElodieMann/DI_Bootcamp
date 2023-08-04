//1-
let div = document.getElementById("container");

//2-
let ul = document.querySelectorAll("ul");
ul[0].firstElementChild.innerHTML = "Richard";

//3-
ul[1].children[1].remove();

//4-

console.log(ul);

ul.forEach((ulElement) => {
    ulElement.classList.add('student_list')
  let li = document.querySelectorAll("li");
  li.forEach((liElement) => {
    liElement.innerHTML = "Elodie";
  });
});

ul[0].classList.add('university')
ul[0].classList.add('attendance')