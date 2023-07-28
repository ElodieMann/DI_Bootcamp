//Exercice 1

//Part1
const people = ["Greg", "Mary", "Devon", "James"];
//1-
people.shift();
//2- + 3-
people.splice(2, 2, "Jason", "Elodie");
//4-
console.log(people.indexOf("Mary"));
//5-
console.log(people.slice(1, 3));
//6-
console.log(people.indexOf("Foo")); // -1 because Foo don't exist
//7-
const last = people[people.length - 1];
console.log(last);

//Part2
//1-
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
//2-
for (let i of people) {
  if (i === "Devon") {
    break;
  }
  console.log(i);
}

//Exercice 2
//1-
const colors = ["red", "blue", "green", "black", "white"];

//2-
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}
//BONUS
const suf = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suf[i]} choice is ${colors[i]}`);
}

// Exercice 3

let num = prompt("Choose a number");
do {
  if (isNaN(num)) {
    num = prompt("you have to put a number");
  }
  if (num < 10) {
    num = prompt("try again");
  }
} while (num < 10 || isNaN(num));


// Exercice 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 2-
console.log(building.numberOfFloors);
//3-
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
//4-
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);
//5-
if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = building.numberOfRoomsAndRent.dan[1] + 1200
}

console.log( building.numberOfRoomsAndRent.dan[1]);


// Exercice 5
// 1-
const family = {
    dad: 'mark',
    mom: 'isa',
    son: 'dav',
    daughter: 'bella'
}

//2-
for (const key in family) {
    console.log(`${key}`);
}

//3-
for (const key in family) {
    console.log(`${family[key]}`);
}

// Exercice 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

for (let i in details) {
    console.log(i, details[i]);
}

// Exercice 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let sort = names.sort()
let secret ='';
for (let i = 0; i < sort.length; i++) {
    secret += sort[i][0];
}

console.log(secret);