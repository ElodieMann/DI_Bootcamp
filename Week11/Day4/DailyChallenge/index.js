const emojis = [
    { emoji: "😀", name: "Smile" },
    { emoji: "🐶", name: "Dog" },
    { emoji: "🌮", name: "Taco" },
    { emoji: "🌸", name: "Flower" },
    { emoji: "🚀", name: "Rocket" },
    { emoji: "🍕", name: "Pizza" },
    { emoji: "🎈", name: "Balloon" },
    { emoji: "🌍", name: "Earth" },
];

function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

function generateDistractors(correctAnswer) {
    const distractors = [];
    while (distractors.length < 4) {
        const randomDistractor = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (randomDistractor !== correctAnswer && !distractors.includes(randomDistractor)) {
            distractors.push(randomDistractor);
        }
    }
    return distractors;
}

function loadNewEmoji() {
    const randomEmoji = getRandomEmoji();
    const emojiPlaceholder = document.getElementById('emoji-placeholder');
    const correctAnswerInput = document.getElementById('correctAnswer');
    emojiPlaceholder.textContent = randomEmoji.emoji;
    correctAnswerInput.value = randomEmoji.name;

    // Generate and display options
    const options = document.getElementById('options');
    options.innerHTML = '';
    const distractors = generateDistractors(randomEmoji.name);
    const allOptions = [randomEmoji.name, ...distractors];
    allOptions.sort(() => Math.random() - 0.5); // Shuffle the options
    allOptions.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="guess" value="${option.toLowerCase()}">${option}<br>
        `;
        options.appendChild(label);
    });
}

const guessForm = document.getElementById('guess-form');
const scoreElement = document.getElementById('score');

guessForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(guessForm);
    const response = await fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
    });
    const result = await response.text();
    if (result.includes("Guess checked")) {
        scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
        guessForm.reset();
        loadNewEmoji();
    }
});

// Initialize the game
loadNewEmoji();
