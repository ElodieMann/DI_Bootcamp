//Exercice1
let language = prompt("which language you speak");
let answer = language.toLowerCase();

switch (answer) {
  case "french":
    alert("Bonjour");
    break;
  case "english":
    alert("Hello");
    break;
  case "hebrew":
    alert("Shalom");
    break;

  default:
    alert("01110011 01101111 01110010 01110010 01111001");
}

//Exercice2
let grade = prompt("your grade");

if (grade > 90) {
    console.log('A');
} else if (grade > 80) {
    console.log('B');
} else if (grade >= 70) {
    console.log('C');
} else {
    console.log('D');
}

//Exercice3
let verb = prompt("right a verb");
let word = verb.length;
let engVerb = verb.slice(-3);

if (word >= 3 && engVerb != "ing") {
  alert(verb + "ing");
} else if (word >= 3 && engVerb === "ing") {
  alert(verb + "ly");
} else if (word < 3) {
  alert(verb);
}
