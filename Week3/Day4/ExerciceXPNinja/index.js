// Exercice1
const day = new Date();
const year = day.getFullYear();

let date1 = prompt("enter a date in year");
let date2 = prompt("enter a second date in year");

let age1 = year - date1;
let age2 = year - date2;

if (age1 > age2) {
  alert(
    "when second person is " +
      (age1 - age2) +
      " years old, he will be half the age of the first"
  );
} else if (age1 < age2) {
  alert(
    "when first person is " +
      (age2 - age1) +
      " years old, he will be half the age of the seconde"
  );
} else {
  alert("you are the same age");
}

//Exercice2 Part1
let zipCode = prompt("Enter your ZIP CODE");

if (zipCode.length === 5 && isNaN(zipCode) === false) {
  alert("success");
} else {
  alert("error");
}

//Exercice2 Part2
let zipCode2 = prompt("Enter your ZIP CODE");
let number = /^\d+$/.test(zipCode2);
let length = /^.{5}$/.test(zipCode2);

if (number === true && length === true) {
  alert("success");
} else {
  alert("error");
}

//Exercice3
const word = prompt("write a word");

const noVowels = word
  .replace(/a/gi, "1")
  .replace(/e/gi, "2")
  .replace(/i/gi, "3")
  .replace(/o/gi, "4")
  .replace(/u/gi, "5");

console.log(noVowels);
