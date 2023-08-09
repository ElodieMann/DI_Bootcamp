let counter = 1;
let bottles = parseInt(prompt("Choose a number"), 10);

console.log(`We start the song at ${bottles} bottles`);
do {
  let bottleWord;
  let sing;
  if (bottles < 2) {
    bottleWord = "bottle";
  } else {
    bottleWord = "bottles";
  }

  if (counter < 2) {
    sing = "it";
  } else {
    sing = "them";
  }
  bottles = bottles - counter;

  let text1 = `Take ${counter} down, pass ${sing} around`;
  let text2 = `we have now ${bottles} ${bottleWord}`;
  
  counter++;
  if (counter > bottles) {
     (counter = bottles);
  }
  console.log(text1, text2);
} while (bottles > 0);
console.log('No bottle of beer on the wall');
