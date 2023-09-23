const titleQuestion = document.querySelector("h1");
const answers = document.querySelector("p");
const btnStart = document.getElementById("start");
const btnRestart = document.getElementById("restart");
const goodAnswers = document.getElementById('goodAnswers')
const wrongAnswer = document.getElementById('wrongAnswer')
let counterGood = 0
let counterWrong = 0

const quizzData = [
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
    correctAnswer: "Blue Whale",
  },
  {
    question:
      "In which year did Christopher Columbus first arrive in the Americas?",
    options: ["1492", "1776", "1620", "1812"],
    correctAnswer: "1492",
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Ge", "Go", "Au"],
    correctAnswer: "Au",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: "Venus",
  },
  {
    question:
      "How many bones are there in the adult human body (approximately)?",
    options: ["106", "206", "306", "406"],
    correctAnswer: "206",
  },
];

let renewQuizzDara = [...quizzData]

btnStart.addEventListener("click", displayQuestion);
btnRestart.addEventListener('click', restartGame)

function displayQuestion() {
    goodAnswers.textContent = "Good Answer : " + counterGood
    wrongAnswer.textContent = "Wrong Answer : " + counterWrong 
    answers.textContent = ""
    if (renewQuizzDara.length === 0) {
      btnStart.style.display = 'none'
      btnRestart.style.display = 'block'
      goodAnswers.style.display = "block"
      wrongAnswer.style.display = "block"
      
    }
    const random = Math.floor(Math.random() * renewQuizzDara.length);
    const indexData = renewQuizzDara[random]
    titleQuestion.textContent = indexData.question;
    renewQuizzDara.splice(random, 1)
    console.log(random);

    let options = indexData.options
    console.log(options);

        for (let i = 0; i < options.length; i++ ) {
        const btnOption = document.createElement('button')
        btnOption.textContent = options[i]
        answers.appendChild(btnOption)

        btnOption.addEventListener('click', function verifyAnswer() {
            if (btnOption.textContent === indexData.correctAnswer) {
                btnOption.style.backgroundColor = 'green'
                counterGood++
            } else {
                btnOption.style.backgroundColor = 'red'
                counterWrong++
            } 
            setTimeout(displayQuestion, 500)
            
        })
    }
}

function restartGame () {
    renewQuizzDara = [...quizzData]; 
    titleQuestion.textContent = ""; 
    answers.textContent = ""
    btnStart.style.display = 'block'; 
    btnRestart.style.display = 'none'; 
    counterGood = 0
    counterWrong = 0
    goodAnswers.style.display = "none"
    wrongAnswer.style.display = "none"
}