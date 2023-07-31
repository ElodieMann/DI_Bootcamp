// Exercice 1
//Part I

function infoAboutMe() {
  console.log("My name is Elodie, I'm 30 years old, I love Javascript");
}
infoAboutMe();

//Part II
function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`
  );
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Exercice 2

function calculateTip() {
  let bill = prompt("how much did you pay?");
  let tip;
  let total;
  if (bill < 50) {
    tip = (bill * 20) / 100;
  } else if (bill < 200) {
    tip = (bill * 15) / 100;
  } else {
    tip = (bill * 10) / 100;
  }
  total = Number(bill) + tip;
  return console.log(`You have to pay ${tip}$ tip, so in total ${total}$`);
}

calculateTip();

//Exercice 3

function isDivisible() {
  let sum = 0;
  for (let i = 0; i < 501; i++) {
    if (i % 23 === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(sum);
}

isDivisible();

// Bonus
function isDivisible2(divisor) {
  let arr = [];
  let sum2 = 0;
  for (let i = 0; i < 501; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum2 += i;
    }
  }
  console.log(sum2);
}

isDivisible2(45);

// Exercice 4

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let sum = 0;
  for (const item of shoppingList) {
    if (item in stock && stock[item] != 0) {
      sum += prices[item];
      stock[item]--;
    }
  }
}

myBill(shoppingList);

// Exercice 5
function changeEnough(itemPrice, amountOfChange) {
  const quarter = amountOfChange[0] * 0.25;
  const dimes = amountOfChange[1] * 0.1;
  const nickel = amountOfChange[2] * 0.05;
  const penny = amountOfChange[3] * 0.01;
  let pocket = quarter + dimes + nickel + penny;

  if (itemPrice > pocket) {
    console.log("false");
  } else {
    console.log("true");
  }
}

changeEnough(14.11, [2, 100, 0, 0]);
changeEnough(0.75, [0, 0, 20, 5]);

// Exercice 6

// 1-
function hotelCost() {
  let answer;

  do {
    answer = prompt("How many nights would you like to stay in the hotel");
  } while (answer === "" || isNaN(answer));

  let calculate = answer * 140;
  alert(`The price is ${calculate} $`);
  return calculate;
}

// 2-
function planeRideCost() {
  let answer;

  do {
    answer = prompt("What is your destination");
  } while (answer === "" || typeof answer !== "string");

  answer = answer.toLowerCase();
  if (answer === "london") {
    return "183 $";
  } else if (answer === "paris") {
    return "200 $";
  } else {
    return "300$";
  }
}

// 3-

function rentalCarCost() {
  let answer;
  do {
    answer = prompt("How many days would you like ro rent the car ?");
  } while (answer === "" || isNaN(answer));

  let priceRent = answer * 40;
  if (answer < 11) {
    return priceRent;
  } else {
    return priceRent - priceRent * 0.05;
  }
}

// 4-

function totalVacationCost() {
  let hotel = hotelCost();
  let destination = planeRideCost();
  let car = rentalCarCost();

  console.log(
    `The car cost: ${car}, the hotel cost: ${hotel}, the plane tickets cost: ${destination}`
  );
  return `The car cost: ${car}, the hotel cost: ${hotel}, the plane tickets cost: ${destination}`;
}

totalVacationCost();

// Bonus
function hotelCost() {
  return answer * 140;
}

function planeRideCost() {
  if (answer === "london") {
    return "183 $";
  } else if (answer === "paris") {
    return "200 $";
  } else {
    return "300$";
  }
}

function rentalCarCost() {
  let priceRent = answer * 40;
  if (answer < 11) {
    return priceRent;
  } else {
    return priceRent - priceRent * 0.05;
  }
}

function totalVacationCost() {
  do {
    answer = prompt("How many nights would you like to stay in the hotel");
  } while (answer === "" || isNaN(answer));

  hotelCost();

  do {
    answer = prompt("What is your destination");
  } while (answer === "" || typeof answer !== "string");
  answer = answer.toLowerCase();
  planeRideCost();

  do {
    answer = prompt("How many days would you like ro rent the car ?");
  } while (answer === "" || isNaN(answer));
  rentalCarCost();

  return `The car cost: ${rentalCarCost()}, the hotel cost: ${hotelCost()}, the plane tickets cost: ${planeRideCost()}`;
}


