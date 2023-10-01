document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start");
  const questionContainer = document.querySelector("h1");
  const optionsContainer = document.querySelector("div");
  let currentQuestionId = 1;
  let counter = 0

  startButton.addEventListener("click", async () => {
    startButton.style.display = "none";
    await loadQuestion(currentQuestionId);
  });

  async function loadQuestion(questionId) {
    try {
      const res = await fetch(`http://localhost:3000/questions/${questionId}`);
      const data = await res.json();
      const questionText = data?.question?.[0].question;
      const options = data.options;
      questionContainer.textContent = questionText;
      optionsContainer.innerHTML = "";
      options.forEach(({ option, id }) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => {
          checkAnswer(questionId, id);
          console.log(currentQuestionId);
          if (currentQuestionId === 10) {
            alert(`Your score is ${counter} points`)
          currentQuestionId === 1
            loadQuestion(currentQuestionId)
          }
        });
        optionsContainer.appendChild(optionElement);
      });
    } catch (error) {
      console("Error loading question:", error);
    }
  }

  async function checkAnswer(questionId, optionId) {
    try {
      const response = await fetch(`/questions/${questionId}/check-answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ optionId }),
      });
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);

      if (data.isCorrect) {
        alert("Correct!");
        counter++
      } else {
       alert("Incorrect");
      }

      currentQuestionId++;
      loadQuestion(currentQuestionId);
    } catch (e) {
      console.error("Error checking answer:", error);
    }
  }
});
