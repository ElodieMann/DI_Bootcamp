const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
let ejs = require("ejs");
let Parser = require("rss-parser");
const path = require("path");
const { error } = require("console");
const port = 3000;

const app = express();
let parser = new Parser();

app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "public", "pages"));

const api = async () => {
  let feed = await parser.parseURL("https://thefactfile.org/feed/");

  const list = feed.items.map((item) => {
    return { title: item.title, link: item.link };
  });
  return list;
};

app.get("/", async (req, res) => {
  try {
    const rssData = await api();
    res.render("index", { rssData });
  } catch {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
});

app.get("/search", async (req, res) => {
  try {
    const rssData = await api();
    res.render("search");
  } catch {
    res.status(500).send("Erreur interne du serveur");
  }
});

app.post("/search/title", async (req, res) => {
  try {
    const { title } = req.body;
    const rssData = await api();
    const filterTitle = rssData.filter(
      (post) => post.title.toLowerCase() === title.toLowerCase()
    );
    if (filterTitle.length > 0) {
      res.render("search", { rssData: filterTitle });
    } else {
      res.render("not_found");
    }
  } catch {
    res.status(500).send("Erreur interne du serveur");
  }
});

app.post("/search/category", async (req, res) => {
  try {
    const { category } = req.body;
    const rssData = await api();
    const filterCategory = rssData.filter((post) =>
      post.title.toLowerCase().includes(category.toLowerCase())
    );
    if (filterCategory.length > 0) {
      res.render("search", { rssData: filterCategory });
    } else {
      res.render("not_found");
    }
  } catch {
    res.status(500).send("Erreur interne du serveur");
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
