const h1 = document.querySelector("h1");
const form = document.forms[0];
const choices = document.getElementById("playerChoice");
const btn = document.querySelector("input");
const h3 = document.querySelector("h3");

const usedIndices = [];

let currentEmoji;
let options = [];
let counter = 0;
let emojis = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getResponse();

});

async function initData() {
  const response = await fetch("http://localhost:5000/");
  emojis = await response.json();
  getEmoji();
}

function getEmoji() {
  if (emojis.length === 0) {
    h3.textContent = `Your score is ${counter}`
    return;
  }
  h3.textContent = "";
  choices.innerHTML = "";

  const random = Math.floor(Math.random() * emojis?.length);
  currentEmoji = emojis?.[random];
  h1.textContent = currentEmoji.emoji;

  usedIndices.push(random);
  options = [currentEmoji.name];

  while (options.length < 4) {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    if (!usedIndices.includes(randomIndex)) {
      options.push(emojis[randomIndex].name);
      usedIndices.push(randomIndex);
    }
  }
  options = shuffleArray(options);
  options.forEach((option) => {
    const optionChoice = document.createElement("option");
    optionChoice.textContent = option;
    choices.appendChild(optionChoice);
  });

  emojis.splice(random, 1);
  if (emojis.length === 0) {
    h3.textContent = `Your score is ${counter}`
    return;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function getResponse() {
  const playerChoice = choices.value;
  const response = await postData({ emoji: currentEmoji.emoji, name: playerChoice })

  if (response) {
    h3.textContent = `${playerChoice} is the correct answer`;
    h3.style.color = "green";
    counter++;
  } else {
    h3.textContent = `${playerChoice} is not the correct answer ! It's ${currentEmoji.name}`;
    h3.style.color = "red";
  }

  setTimeout(getEmoji, 1000)
}

async function postData(data = {}) {
  const response = await fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  });
  return response.json(); 
}