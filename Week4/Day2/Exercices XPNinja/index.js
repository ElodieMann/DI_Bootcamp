// Exercice 1

let randomNumber = Math.floor(Math.random() * 101);

function randomEven() {
  console.log(randomNumber);
  for (let i = 0; i <= randomNumber; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

randomEven();

// Exercice 2

function capitalize(str) {
  let newStr = [];
  let newStr2 = [];
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (i % 2 === 0 || i === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  console.log(newStr);
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (i % 2 != 0) {
      newStr2 += str[i].toUpperCase();
    } else {
      newStr2 += str[i].toLowerCase();
    }
  }
  console.log([newStr, newStr2]);

  return [newStr, newStr2];
}

capitalize("abcdef");

// Exercice 3

function isPalindrome(str) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < str.length; i++) {
    arr1 += str[i];
  }
  for (let j = str.length - 1; j >= 0; j--) {
    arr2 += str[j];
  }

  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("kayak"));

// Exercice 4

function biggestNumberInArray(arrayNumber) {
  let biggest = [];
  if (arrayNumber.length === 0) {
    return 0;
  }
  for (let i = 0; i < arrayNumber.length; i++) {
    if (typeof arrayNumber[i] === "string") {
      arrayNumber[i] = 0;
    }
    if (arrayNumber[i] > biggest) {
      biggest = arrayNumber[i];
    }
  }

  return biggest;
}

console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99]));

// Exercice 5

function uniqueElements(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
    newArr.push(arr[i])
    }
  }

  console.log(newArr);
}

uniqueElements([1,2,3,3,3,3,4,5])