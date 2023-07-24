// Exercice 1
5 >= 1;
// true because it s 5 > 1
// true

0 === 1;
// false because 3 = it s for the value AND type
// false

4 <= 1;
// false 4 is not < and not = to 1
// false

1 != 1;
// false ! is no
// false

"A" > "B";
// false, a is under b
// false

"B" < "C";
// true, b is under c
// true

"a" > "A";
// true ASCII Code of a is bigger than A
// true

"b" < "A";
// false ASCII Code of b is bigger than A
// false

true === false;
// false
// false

true != true;
// false
// false

// Exercice 2

let stringNumber = prompt("put somme numbers separated by commas ex: 1,2,3");

let choice = stringNumber.split(",");

const sum = eval(choice.join("+"));

alert("Sum of the elements:" + sum);

// Exercice 3
let nemo = prompt("write a sentence with the word Nemo");

let arr = nemo.split(' ');

if (arr.includes('Nemo') === true) {
   alert("I found Nemo at " + arr.indexOf('Nemo'));
} else {
    alert("no Nemo!")
}

// Exercice 4

let chooseNumber = prompt("choose a number");
let letter = "o";
let multiply = letter.repeat(chooseNumber);
let message = "b" + multiply + "m";


if (chooseNumber < 2) {
  alert("boom");
} else if (chooseNumber % 2 === 0 && chooseNumber % 5 === 0) {
  alert((message).toUpperCase());
} else if (chooseNumber % 2 === 0) {
  alert(message + "!");
} else if (chooseNumber % 5 === 0) {
  alert((message).toUpperCase());
} else if (chooseNumber > 2) {
  alert(message);
}
