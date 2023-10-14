const db = require("../config/knex");

const getAllToDos = () => {
  return db.select("*").from("todolist");
};

const createToDo = (title, content) => {
  return db("todolist")
    .insert({ title, content, created: new Date(),
     })
    .returning(["id", "title", "content"]);
};



const deleteToDo = (id) => {
  return db("todolist")
    .where("id", id)
    .del()
    .returning(["id", "title", "content"]);
};

module.exports = {
  getAllToDos,
  createToDo,
  deleteToDo,
};
