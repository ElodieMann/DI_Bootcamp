let arr = ["*", "*", "*", "*", "*", "*"];
let sum = [];

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  console.log(sum);
}

// --------------------

let arr2 = [
  ["*", "*"],
  ["*", "*"],
  ["*", "*"],
];
let sum2 = [];

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    console.log((sum2 += arr2[i][j]));
  }
}
