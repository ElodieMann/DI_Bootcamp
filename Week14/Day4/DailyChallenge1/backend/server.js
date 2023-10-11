const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/api/hello", (req, res) => {
  res.send("Hello From Express");
});
app.post("/api/world", (req, res) => {
  const inputValue = req.body
  console.log(inputValue.data);
  const response = `I received your POST request. This is what you sent me: ${inputValue.data}`
  res.send(response)
});

app.listen(3000, () => {
  console.log("listening");
});
