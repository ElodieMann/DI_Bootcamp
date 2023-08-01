function playTheGame() {
  let play = confirm("Do you want to play ?");

  if (play === false) {
    alert("No problem, Goodbye");
  } else {
    const game = prompt("Enter a number between 0 and 10");
    const userNumber = game.trim();
    if (isNaN(userNumber) || userNumber.length === 0) {
      alert("Sorry Not a number, Goodbye");
    } else if (userNumber < 0 || userNumber > 10) {
      alert("Sorry it’s not a good number, Goodbye");
    } else {
      const computerNumber = Math.floor(Math.random() * 11);
      console.log(computerNumber);
      compareNumbers(userNumber, computerNumber);
    }
  }
}

function compareNumbers(userNumber, computerNumber) {
  let chance = 2;

  do {
    console.log(userNumber, computerNumber);
    
    if (userNumber > computerNumber) {
      userNumber = prompt("Your number is bigger then the computer’s, guess again");

      
    } else if (userNumber < computerNumber) {
        userNumber = prompt("Your number is smaller then the computer’s, guess again");

      
    } else {
        alert("WINNER");
    }
    chance--;

  } while ((chance > 0));
 
  if (chance == 0) {
    alert('out of chances')
  }

}

//BONUS

// function playTheGame() {
//     let play = confirm("Do you want to play ?");
  
//     if (play === false) {
//       alert("No problem, Goodbye");
//     } else {
//       let game = prompt("Enter a number between 0 and 10");
//       let userNumber = game.trim();
//       while (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
//         game = prompt("Veuillez entrer un nombre correct entre 0 et 10");
//         userNumber = parseInt(game.trim());
//       }
  
//       const computerNumber = Math.floor(Math.random() * 11);
//       console.log(computerNumber);
//       compareNumbers(userNumber, computerNumber);
//     }
//   }