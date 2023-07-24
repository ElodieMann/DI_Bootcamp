// Exercice 1

let sentence = ["my", "favorite", "color", "is", "blue"];
sentence.join(" ");

// Exercice 2

let str1 = "hey";
let str2 = "you";

let newWord = str2.substring(0, 2) + str1.substring(2) + str1.substring(0, 2) + str2.substring(2)
console.log(newWord);

// Exercice 3


let prompt1 = prompt('put a number :')
let num1 = parseInt(prompt1)
let prompt2 = prompt('put a number :')
let num2 = parseInt(prompt2)

alert("it\'s equal to " + (num1 + num2))

// Bonus

let promptBon1 = prompt('put a number :')
let answer1 = parseInt(promptBon1)
let promptBon2 = prompt('put what you whant to do : -, +, *, % or /')
let answer2 = promptBon2
let promptBon3 = prompt('put a number :')
let answer3 = parseInt(promptBon3)
alert("the result is : " + eval(answer1 + answer2 + answer3))