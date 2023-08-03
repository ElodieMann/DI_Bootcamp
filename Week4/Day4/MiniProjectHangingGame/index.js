let player1 = prompt("whrite a word");

let asterik = "*".repeat(player1.length);
console.log(asterik);

let chance = 0;

function game() {
  let word = asterik.split("");
  console.log(word);

  do {
    let player2 = prompt("put a letter");
    console.log(player2);

    for (let i = 0; i < player1.length; i++) {
      if (player1[i] === player2) {
        word[i] = player2;
      }
    }
    console.log(word);
    if (word.join("") === player1) {
      alert("CONGRATS YOU WIN");
      return;
    }
    chance++;

    if (chance === 10) {
        alert("YOU LOSE");
        return
    }

  } while (chance < 11);
  console.log(chance);

}

game();
