// Exercice 1
let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(` True ! ${numbers[i]} is divisible by 3`);
  } else {
    console.log(` False ! ${numbers[i]} is not divisible by 3`);
  }
}

// Exercice 2
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

let namePrompt = prompt("Enter your name");

if (namePrompt in guestList) {
  console.log("Hi! I'm " + namePrompt + ", I'm form " + guestList[namePrompt]);
} else {
  console.log("Hi! I'm a guest");
}

// Exercice 3
let age = [20, 5, 12, 43, 98, 55];
let sum = 0;
let largest = age[0];

for (let i = 0; i < age.length; i++) {
  sum += age[i];
}

console.log(sum);

for (let i = 0; i < age.length; i++) {
  console.log(age[i]);
  console.log(largest);
  if (age[i] > largest) {
    largest = age[i];
  }
}

console.log(largest);
