const express = require("express");
const router = express.Router();
const books = [];

router.get("/", (req, res) => {
  res.json(books);
});

router.post("/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).send("book not found");
  }

  const updatedBook = {
    id: books[index].id,
    title: req.body.title,
    author: req.body.author,
  };
  books[index] = updatedBook;
  res.status(200).json("book updated");
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).send("book not found");
  }

  books.splice(index, 1);
  res.status(200).json("book deleted");
});

module.exports = router;
