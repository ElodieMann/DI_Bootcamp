// Exercice 1

function isblanck(str) {
  if (str === "") {
    return false;
  } else {
    return true;
  }
}

console.log(isblanck(""));
console.log(isblanck("test"));

// Exercice 2

function abbrevName(str) {
  const ab1 = str.split(" ")[0];
  const ab2 = str.split(" ")[1][0];
  return `${ab1} ${ab2}. `;
}

console.log(abbrevName("Elodie Mann"));

// Exercice 3

const test = "The Quick Brown Fox";

function change(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
      console.log(result);
    } else {
      result += str[i].toUpperCase();
      console.log(result);
    }
  }

  return result;
}

console.log(change(test));

// Exercice 4

function isOmnipresent(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(num)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
);
