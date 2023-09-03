//1-
function compareToTen(num) {
    return new Promise(function (resolve, reject) {
      if (num <= 10) {
        resolve("I will get a gift");
      } else {
        reject("I won't get the gift");
      }
    });
  }
  
  compareToTen(3)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  
  //2-
  let average = true;
  
  let endOfYear = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (average) {
        resolve("I passed :)");
      } else {
        reject("Oh noo :(");
      }
    }, 4000);
  });
  
  endOfYear
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  
  
  //3-
  
  const promise1 = Promise.resolve(3)
  promise1.then((value) => console.log(value))
  const promise2 = Promise.reject("Boo!")
  promise2.catch((error) => console.log(error))
  
  //4-