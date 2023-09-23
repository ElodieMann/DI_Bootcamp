const express = require("express");
const app = express();
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

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

let score = 0;

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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const answer = req.body.guess.toLowerCase();
    const correctAnswer = req.body.correctAnswer.toLowerCase();

    if (answer === correctAnswer) {
        score++;
        res.send('Guess checked');
    } else {
        res.send('Guess not checked');
    }
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
