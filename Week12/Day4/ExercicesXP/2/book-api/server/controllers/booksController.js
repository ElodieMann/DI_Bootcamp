const db = require("../config/knex");
const booksModel = require("../models/booksModels");

const getAllBooks = async (req, res) => {
  try {
    const books = await booksModel.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const books = await booksModel.getBookById(id);
    if (books) {
      res.status(200).json(books);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createBook = async (req, res) => {
  const { title, author, publishedyear } = req.body;
  try {
    const newBook = await booksModel.createBook(title, author, publishedyear);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};
