function returnNumbers(str) {
    return str.match(/\d+/g).join("");
  }
  
  const str = "k5k3q2g5z6x9bn";
  console.log(returnNumbers(str));