// Exercie 1

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];

//1-
let sum = 0;
for (const animal of data) {
  if (animal.type === "dog") {
    sum += animal.age * 7;
  }
}

console.log(sum);

//2-
let dog = data
  .filter((animal) => animal.type === "dog")
  .map((animal) => animal.age)
  .reduce((acc, cur) => {
    return acc + cur;
  });

const humanAge = dog * 7;
console.log(humanAge);

// Exercice 2
const userEmail3 = " cannotfillemailformcorrectly@gmail.com ";
const noSpace = userEmail3.trim();
console.log(noSpace);

// Exercice 3
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

const nameFonction = {};

for (let user of users) {
  const fullname = user.firstName + " " + user.lastName;
  nameFonction[fullname] = user.role;
}

console.log(nameFonction);

// Exercice 4
//1- 
const letters = ["x", "y", "z", "z"];
const letterCount = {};

for (const letter of letters) {
  if (letterCount[letter]) {
    letterCount[letter] += 1;
  } else {
    letterCount[letter] = 1;
  }
}

console.log(letterCount);

//2-
const letterCount2 = {};

letters.reduce((acc, cur) => {
  if (letterCount2[cur]) {
    letterCount2[cur] += 1;
  } else {
    letterCount2[cur] = 1;
  }
}, letterCount2);

console.log(letterCount2);