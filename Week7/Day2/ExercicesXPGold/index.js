// Exercice 1
let array1 = [1, 5, 8, 7, 2];

const sumFunction = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return console.log(sum);
};

sumFunction(array1);

// Exercice 2

let array2 = [1, 5, 8, 7, 7, 1, 5, 8, 7, 2];

const removeDuplicate = (arr) => {
  let arr2 = [];
  arr.forEach((element) => {
    if (!arr2.includes(element)) {
      arr2.push(element);
    }
  });
  return console.log(arr2);
};
removeDuplicate(array2);

// Exercice 3

let array3 = [NaN, 0, 15, false, -22, "", undefined, 47, null];

const removeFalse = (arr) => {
  let arr2 = [];
  arr.forEach((element) => {
    element ? arr2.push(element) : null;
  });
  return console.log(arr2);
};

removeFalse(array3);

// Exercice 4
const repeat = (str, num) => {
  return `${str.repeat(num)}`;
};

console.log(repeat("Ha!", 3));

// Exercice 5
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";


let arr = startLine.split("");
let arrStart = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === " ") {
    arrStart.push(arr[i]);
  }
}


console.log(startLine);
console.log(turtle.padStart(arrStart.length + 1));
console.log(rabbit.padStart(arrStart.length + 1));
console.log(turtle = turtle.trim().padEnd(9, '='));
