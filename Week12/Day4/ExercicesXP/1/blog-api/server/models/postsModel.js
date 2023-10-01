const db = require('../config/knex');

const getAllPosts = () => {
  return db.select("id", "title", "content").from("posts");
};

const getPostById = (id) => {
  return db.select("id", "title", "content").from("posts").where({ id }).first();
};

const createPost = (title, content) => {
  return db("posts").insert({ title, content }).returning(['id', 'title', 'content']);
};

const updatePost = (id, title, content) => {
  return db("posts").where('id', id).update({ title, content }).returning(['id', 'title', 'content']);
};

const deletePost = (id) => {
  return db("posts").where('id', id).del().returning(['id', 'title', 'content']);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};