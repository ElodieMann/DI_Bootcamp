const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🌞", name: "Sun" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🌸", name: "Flower" },
  { emoji: "📱", name: "Phone" },
  { emoji: "⏰", name: "Clock" },
  { emoji: "🍔", name: "Hamburger" },
  { emoji: "🎈", name: "Balloon" },
  { emoji: "🌍", name: "Earth" },
  { emoji: "📷", name: "Camera" },
  { emoji: "🌟", name: "Star" },
  { emoji: "🍦", name: "Ice Cream" },
  { emoji: "🎁", name: "Gift" },
];

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  res.send(emojis);
});

app.post("/", (req, res) => {
  const response = getResponse(req.body);
  res.send(response);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

const getResponse = (res) => {
  return emojis.some(
    (item) => item.emoji === res.emoji && item.name === res.name
  );
};
