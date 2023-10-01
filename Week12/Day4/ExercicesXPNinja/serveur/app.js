const express = require("express");
const app = express();
const db = require("./config/knex");
const routes = require("./routes/routes");
const fs = require("fs");

app.use(express.json());
app.use(express.static(__dirname + "/../public"));

app.get("/", (req, res) => {
  fs.readFile(__dirname + "/../public/index.html", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading HTML file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(data);
  });
});

app.use("/", routes);
app.set("db", db);

app.listen(3000, () => {
  console.log("Serveur en cours d'exécution sur le port 3000");
});
