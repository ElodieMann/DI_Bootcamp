const express = require("express");
const app = express();

app.use(express.json());

let data = [
  {
    id: 1,
    title: "book1",
    author: "author1",
    publishedYear: 2002,
  },
  {
    id: 2,
    title: "book2",
    author: "author2",
    publishedYear: 2012,
  },
  {
    id: 3,
    title: "book3",
    author: "author3",
    publishedYear: 2022,
  },
];

app.get("/api/books", (req, res) => {
  res.json(data);
});

app.get("/api/books/:bookId", (req, res) => {
  const id = Number(req.params.bookId);
  const book = data.find((bookId) => bookId.id === id);

  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.status(200).json(book);
});

app.post("/api/books", (req, res) => {
  const newBook = {
    id: data.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  data.push(newBook);
  res.status(201).json(newBook);
});

app.listen(5000, () => console.log("Example app listening on port 5000!"));
