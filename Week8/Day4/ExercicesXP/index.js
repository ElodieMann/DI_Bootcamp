// Exercice 1
// I am John Doe from Vancouver, Canada. Latitude(49.2827) Longitude(-123.1207)

// Exercice 2
function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });

// Exercice 3
const users = { user1: 18273, user2: 92833, user3: 90315 };
const arr = Object.entries(users);
const map = arr.map(([user, id]) => {
  return [user, id * 2];
});
console.log(arr);
console.log(map);

//Exercice 4
//object because we have an constructor who is the "template" and the new is created in relation of the constructor who is an object

// Exercice 5
// number 2 because call the super classe constructor and pass in the name parameter and in the constructor (of the option 2) we have two parameters : name of the class constructor and size for this class

//Exercice 6
//1-  both false because it s reference by type
//2-
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // 4 because the value of number in object 1 is changed to four (in line 33, and object2 = object 1 so it s the same same object in the memory)
console.log(object3.number); // same reason
console.log(object4.number); // 5 it s another object unrelated with the object 1 and value of number is equal to 5

//3-
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color, sound) {
    super(name, type, color);
  }
  get area() {
    return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mamal ('Lily', 'cow', 'brown and white')
console.log(farmerCow.area);