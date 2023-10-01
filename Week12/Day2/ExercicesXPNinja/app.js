const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send(req.body);
});


router.post("/greet", (req, res) => {
    const name = req.body.name
    const emoji = req.body.emoji
if(!name) {
    res.send('Pleese enter your name')
    return
}
  res.send(`Hello ${name}, you choose ${emoji}`);
});

app.use('/', router)

app.listen(3000,  () => {
    console.log("listening");
})
