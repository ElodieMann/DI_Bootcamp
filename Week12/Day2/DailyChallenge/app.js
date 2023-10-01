const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/quiz", router);

let score = 0;
const useQuestions = [];

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
  {
    question: "What is the largest desert in the world?",
    answer: "Antarctica",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answer: "CO2",
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: "Au",
  },
  {
    question: "In which year did the Titanic sink?",
    answer: "1912",
  },
];

router.get("/", (req, res) => {
  if (useQuestions.length === triviaQuestions.length) {
    res.redirect("/quiz/score");
    return;
  }

  let currentQuestion;

  triviaQuestions.forEach((question) => {
    if (!useQuestions.includes(question)) {
      currentQuestion = question;
    }
  });
  if (currentQuestion) {
    useQuestions.push(currentQuestion);
    res.send(` 
    <h1>Question : ${currentQuestion.question}</h1>
    
      <form method="post" action="/quiz">
        <input type="text" name="answer" placeholder="Answer">
        <input type="submit" value="Next">
      </form>`);
  }
});

router.post("/", (req, res) => {
  if (useQuestions.length === triviaQuestions.length) {
    res.redirect("/quiz/score");
    return;
  }

  console.log(req.body.answer);

  const answer = req.body.answer.toLocaleLowerCase();

  const currentQuestionIndex = triviaQuestions.findIndex((question) => {
    return question.answer.toLocaleLowerCase() === answer;
  });

  console.log(currentQuestionIndex);

  if (currentQuestionIndex !== -1) {
    const currentQuestion = triviaQuestions[currentQuestionIndex];

    if (answer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      score++;
    }
  }

  res.redirect("/quiz");
});

router.get("/score", (req, res) => {
  res.send(`End of game, you're score is ${score}`);
});

app.listen(3000, () => {
  console.log(`listening`);
});
