let input = document.getElementById("input");
let submit = document.getElementById("submit");
let span = document.querySelector("span");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let value = input.value;
  let arr = value.split("");
  let newArr = [];
  let reg = /^[a-zA-Z]+$/;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(reg)) {
      newArr.push(arr[i]);
    }
  }

  span.textContent = newArr.join("");
});