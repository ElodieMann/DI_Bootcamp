// Exercice 1
//1 a will be 3 because the condition is true so change the value, and it s a variable let so can change
//2 a will be 5 , and it's let variable and on third function the value of a is 5 because the function 2 is called
//3 value is "hello" on the fonction 5 because function 4 is called
//4 value is 'test' because a is reassigned (with let) in the function and it s a different scope and the function is called
//5 we have a first let a in the global scope, in the if it s a different scope and the condition is true so in the if, the first a, in the alert a = 5, but after we go out the scope of if and return to the global scope so in the second scope a = 2

// Exercice2
const winBattle = () => {
  return true;
};

const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// Exercice 3
const isString = (value) => {
  return typeof value === "string" ? true : false;
};

// Exercice 4
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, i) => {
  console.log(`${i + 1}# choice is ${element}`);
});

colors.includes("Violet") ? console.log("Yeah") : console.log("No...");

// Exercice 5

const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

color.forEach((element, i) => {
  let prefixe;
  i + 1 > 3 ? (prefixe = ordinal[0]) : (prefixe = ordinal[i + 1]);
  console.log(`${i + 1}${prefixe} choise is ${element}`);
});

// Exercice 6

let bankAmount = 6000;
const tva = 0.17;
const details = ["+200", "-100", "+146", "+167", "-2900"];

const calculateTva = () => {
  let sum = 0;
  details.forEach((element) => {
    sum += Number(element) * tva
  });
  return console.log(bankAmount - sum)
};

calculateTva();
