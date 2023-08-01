let input = document.getElementById("input");
console.log(input);

let num1 = "";
let oper = "";
let num2 = "";

function number(num) {
  if (oper === "") {
    num1 += num;
    input.value = num1;
  } else {
    num2 += num;
    input.value = num2;
  }
}
function operator(op) {
  oper = op;
  input.value = oper;
}

function equal() {
  input.value = eval(`${num1} ${oper} ${num2}`);
  num1 = "";
  oper = ""
  num2 = "";
  
}

// BONUS
function reset () {
    num1 = "";
    oper = ""
    num2 = "";
    input.value = ""
}