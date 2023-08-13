//Exercice 1
function printFullName({ first, last }) {
    console.log(`Your full name is ${first} ${last}`);
  }
  printFullName({ first: "Elie", last: "Schoppik" });
  
  //Exercice 2
  function keysAndValues (obj) {
   const key = Object.keys(obj).sort()
   const value = key.map(key => obj[key])
  console.log([key, value]) 
  }
  
  keysAndValues({ b: 1, a: 2, c: 3 })
  
  // Exercice 3
  // 3 because we have class with a constructor with methode of increment by 1 and initialized to 0
  // We create a new instance and incremente two times, we create another instance equal to the first instance and incremente one more time