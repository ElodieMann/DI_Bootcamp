const level = document.querySelector(".level");
const marker = document.querySelector(".crossOrRound");
const table = document.querySelector("table");
const easyLevel = document.getElementById("easy");
const difficultLevel = document.getElementById("difficult");
const xChoice = document.getElementById("xChoice");
const oChoice = document.getElementById("oChoice");
const reset = document.getElementById("reset");
const divs = document.querySelectorAll("td");
let playerChoice = "";
let computerChoice = "";
let game = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let playerArr = [];
let computerArr = [];
let firstMove = true;


const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];



easyLevel.addEventListener("click", easyLevelSelected);
difficultLevel.addEventListener("click", diffLevelSelected);
xChoice.addEventListener("click", crossChoice);
oChoice.addEventListener("click", roundChoice);
reset.addEventListener("click", resetBtn);

function easyLevelSelected() {
  easyLevel.classList.add("selected");
  difficultLevel.classList.remove("selected");
  startGame();
}
function diffLevelSelected() {
  difficultLevel.classList.add("selected");
  easyLevel.classList.remove("selected");
  startGame();
}

function startGame() {
  level.style.visibility = "hidden";
  marker.style.visibility = "visible";
}

function crossChoice() {
  playerChoice = "X";
  computerChoice = "O";
  marker.style.visibility = "hidden";
  table.style.visibility = "visible";
  playGameEasy();
}

function roundChoice() {
  playerChoice = "O";
  computerChoice = "X";
  marker.style.visibility = "hidden";
  table.style.visibility = "visible";
  playGameEasy();
}

function playGameEasy() {
  divs.forEach((div) => {
    div.addEventListener("click", function () {
      if (!div.classList.contains("check")) {
        div.textContent = playerChoice;
        let id = div.getAttribute("id");

        playerArr.push(Number(id));
        let index = game.indexOf(Number(id));
        game.splice(index, 1);
        div.classList.add("check");

        result();
        
        if (game.length > 1 && !winner(playerArr)) {
          if (easyLevel.classList.contains("check")) {
            computerRandomGame();
          } else {
            computerHard();
          }
          result();
          
        }
      }
    });
  });
}

function computerRandomGame() {
  if (game.length > 0 && !winner(computerArr)) {
    let random = Math.floor(Math.random() * game.length);
    let cell = game[random];
    let div = document.getElementById(cell);
    div.textContent = computerChoice;
    computerArr.push(cell);
    let index = game.indexOf(Number(cell));
    game.splice(index, 1);
    div.classList.add("check");
    
   
  }
}

function computerHard() {
  if (game.length > 0 && !winner(computerArr)) {
    
    if (firstMove) {
      computerRandomGame();
      firstMove = false;
    } else {
      let foundMove = false; 

      winCombos.forEach((combo) => {
        const playerPositions = combo.filter((position) => playerArr.includes(position));
        const emptyPositions = combo.filter((position) => !playerArr.includes(position) && !computerArr.includes(position));

        if (playerPositions.length === 2 && emptyPositions.length === 1) {
          const blockPosition = emptyPositions[0];
          computerArr.push(blockPosition);
          const div = document.getElementById(blockPosition);
          div.textContent = computerChoice;
          let index = game.indexOf(blockPosition);
          game.splice(index, 1);
          div.classList.add("check");

          foundMove = true; 
        }
      });

      
      if (!foundMove) {
        computerRandomGame();
      }
    }
  }
}




function result() {
  if (game.length === 0 && !winner(playerArr) && !winner(computerArr)) {
    alert("EGALITY");
    reset.style.visibility = "visible";
    return
  } else if (winner(playerArr)) {
    alert("YOU win");
    reset.style.visibility = "visible";
    return
  } else if (winner(computerArr)) {
    alert("computer win");
    reset.style.visibility = "visible";
    return
  }
}

function winner(whoWin) {
  return winCombos.some((combo) => combo.every((num) => whoWin.includes(num)));
}

function resetBtn() {
  playerChoice = "";
  computerChoice = "";
  game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  playerArr = [];
  computerArr = [];

  divs.forEach((div) => {
    div.textContent = "";
    div.classList.remove("check");
  });

  level.style.visibility = "visible";
  marker.style.visibility = "hidden";
  table.style.visibility = "hidden";
  firstMove = true
  easyLevel.classList.remove("selected");
  difficultLevel.classList.remove("selected");
  
}
