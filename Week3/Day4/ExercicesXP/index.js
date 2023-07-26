// Exercice 1
const x = 9;
const y = 18;

if (x > y) {
    alert('x is the biggest number')
} else {
    alert('y is the biggest number')
}

//Exercice 2
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog === "Chihuahua") {
  console.log("I love Chihuahuas, it\’s my favorite dog breed");
} else {
  console.log("I dont care, I prefer cats");
}

//Exercice 3
let message = prompt("put a number");

if (message % 2 === 0) {
  alert(message + " is an even number");
} else {
  alert(message + " is an odd  number");
}

// Exercice 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let onlineUsers = users.length

switch(onlineUsers) {
    case 0:
      console.log('no one is online');
      break;
    case 1:
      console.log(users[0] + ' is online');
      break;
    case 2:
      console.log(users[0] + ' and ' + users[1] + ' are online');
      break;
    default:
        console.log(users[0] + ' and ' + users[1] + " and " + (onlineUsers - 2) + ' more are onlines');
  }