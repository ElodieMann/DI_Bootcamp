let counter = 1;
let bottles = prompt("Choose a number");


console.log(`We start the song at ${bottles} bottles`);
do {
    let bottleWord;
    let sing;
    if (bottles < 2) {
      bottleWord = "bottle";
    } else {
      bottleWord = "bottles"
    }
  
    if (counter < 2) {
      sing = "it";
    } else {
      sing = "them"
    }
  
    let text1 = `Take ${counter} down, pass ${sing} around`;
    let text2 = `we have now ${bottles - 1} ${bottleWord}`;
  
    bottles = bottles - (counter + 1);
    counter++;
  
    console.log(text1, text2);
} while (bottles >= 0 )