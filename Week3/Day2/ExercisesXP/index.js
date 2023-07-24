//Exercice 1
//1-
const favoriteFood = "chocolate";
//2-
const favoriteMeal = "diner";
//3-
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

//-------------------

// Exercice 2
// Part 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//1-
let myWatchedSeriesLength = myWatchedSeries.length;

//2-
let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;

//3-
console.log(
  `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`
);

//Part 2
//1-
myWatchedSeries.splice(2, 1, "friends");

//2-
myWatchedSeries.push("grey");

//3-
myWatchedSeries.unshift("barreau");

//4-
myWatchedSeries.splice(1, 1);

//5-
console.log(myWatchedSeries[1][2]);

//6-
console.log(myWatchedSeries);

//-------------------

// Exercice 3
//1-
const celsius = 23;
//2-
const fahrenheit = celsius / 5 * 9 + 32;
console.log(fahrenheit);

// ----------------

//Exercice 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55 because a + b = 34 + 21 = 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23 because let can change so a no equal to 34 but 2
// Actual: 23

console.log(c) //third expression
// Prediction: undefined because c is empty
// Actual:undefined

console.log(3 + 4 + '5'); //fourth expression
// Prediction: 7 5 because 3 + 4 is numbers and '5' string
// Actual: 75

// ----------------

//Exercice 5

typeof(15)
// Prediction: number  because 15 whitout quotes
// Actual: number

typeof(5.5)
// Prediction: number because 5.5 whitout quotes
// Actual: number

typeof(NaN)
// Prediction: NaN 
// Actual: number

typeof("hello")
// Prediction: string because ""
// Actual: string

typeof(true)
// Prediction: boolean because boolean is true or false
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean != prints true or false
// Actual: boolean

"hamburger" + "s"
// Prediction: 'hambergers' because "+" is for add to 
// Actual:'hambergers'

"hamburgers" - "s"
// Prediction: NaN because - is for mathematical and we have 2 strings
// Actual: NaN

"1" + "3"
// Prediction: '13' as a string
// Actual: '13'

"1" - "3"
// Prediction: NaN because - is for mathematical and "1" and "3" are strings not numbers because they are quotes
// Actual: -2

"johnny" + 5
// Prediction: 'johnny5' because johnny is a string and 5 a number but "+" is for add to 
// Actual: 'johnny5'

"johnny" - 5
// Prediction: NaN because - is for mathematical and "johnny" is a string
// Actual: NaN

99 * "hello"
// Prediction: NaN because * is for mathematical and "hello" is a string
// Actual: NaN

1 != 1
// Prediction: false because 1 is equal to 1
// Actual:false

1 == "1"
// Prediction: true because 2 == is for value 
// Actual:true

1 === "1"
// Prediction: false because 2 === is for value AND type of
// Actual:false


// ----------------

//Exercice 6
5 + "34"
// Prediction: 534 for concatenate
// Actual: 534

5 - "4"
// Prediction: 1 because i see my error in the last exercice :)
// Actual:

10 % 5
// Prediction: 0 because modulo is the rest 
// Actual:

5 % 10
// Prediction: 0.5 i think
// Actual: 5

"Java" + "Script"
// Prediction: 'Javascript' for concatenate a string
// Actual:

" " + " "
// Prediction: 2 spaces '  '
// Actual: '  '

" " + 0
// Prediction: space and 0 " 0"
// Actual: ' 0'

true + true
// Prediction: true for boolean
// Actual: 2 

true + false
// Prediction: false for logical
// Actual:1 

false + true
// Prediction: false for logical
// Actual: 1 

false - true
// Prediction: NaN 
// Actual: -1

!true
// Prediction: false because ! equal to no
// Actual: false

3 - 4
// Prediction: -1
// Actual:-1

"Bob" - "bill"
// Prediction: NaN because - is for mathematical ans we don't have 2 numbers but 2 strings 
// Actual:NaN