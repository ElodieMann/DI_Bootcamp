// ____/''''\\____
//we have a external function landscape with 2 inners functions and an empty string variable , the first, flat, will repeat x time "_" that is stored in the result variable, for mountain it's the same but result start with "/" after with a for loop repeat x times "'" and finish with "\\",  after the inners functions but still in the external function we invoked flat and maintain with a value of x. After in the global scope we invoked external function landscape

let landscape = function() {

    let result = "";
   
    let flat = function(x) {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
    let mountain = function(x) {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
   
    flat(4);
    mountain(4);
    flat(4)
   
    console.log(result);
   }
   
   landscape()

   const landscape2 = () => {

    let result = "";
   
    const flat = x => {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
    const mountain = x => {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
   
    flat(4);
    mountain(4);
    flat(4)
   
    console.log(result);
   }

   landscape2()

   //Exercice 2
   // the output is 13, we have an external function with parameter x and an inside function with parameter y. the first const addToTen = addTo(10) assign x to 10 and addToTen(3) assign y to 3. It s aclosure function that remember its outer variables and can access them 

   //Exercice 3
   // It s a curried function that takes multiple arguments one at a time.the output is 31 because in curriedSum(30)(1) 30 is assigned to a and 1 to b the function curriedSum return a + b

   // Exercise 4
   // output will be 17, const add5 assign a to 5 with curriedsum(5) and add5 assign b to 12 because its the same to write curriedsum(12). it's a curried function

   // Exercice 4 
   // we have first of all const compose = (f, g) => (a) => f(g(a)) with a = 10 that is a function compose insite an other function g. const add1 = (num) => num + 1; equal to f(g) in compose(add1, add5)(10) num = 10, so f(g) is equal to 11 after f(g(a)) equal to const add5 = (num) => num + 5;, here num is equal to the last value (11 or f(g)) so result is 16