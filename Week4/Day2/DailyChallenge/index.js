function sentence() {
  let sentence = prompt(
    "write a sentence where each word is separated by a comma"
  );
  let arr = sentence.split(", ");
  let line = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > line) {
      line = arr[i].length;
    }
  }

  let frameLine = "*".repeat(line + 4);
  console.log(frameLine);

  for (word of arr) {
    let space = line - word.length;
    console.log("* " + word + " ".repeat(space) + " *");
  }

  console.log(frameLine);
}

sentence();
