const db = require('../config/knex');

const getAllBooks = () => {
  return db.select("id", "title", "author", "publishedyear").from("books");
};

const getBookById = (id) => {
  return db.select("id", "title", "author", "publishedyear").from("books").where({ id })
};

const createBook = (title, author, publishedyear) => {
  return db("books").insert({ title, author, publishedyear }).returning(['id', 'title', 'author', "publishedyear"]);
};


module.exports = {
    getAllBooks,
    getBookById,
    createBook
};