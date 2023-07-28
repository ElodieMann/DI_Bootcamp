const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// 1-
numbers.toString();

// 2-

numbers.join("");
numbers.join(" ");
numbers.join(",");
numbers.join("+");
// 3-
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i; j++) { // Correction ici
      if (numbers[j] < numbers[j + 1]) {
        let arr = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = arr;
      }
    }
  
}

console.log(numbers);