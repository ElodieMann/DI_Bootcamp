const toDoModel = require("../models/models");

const getAllToDos = async (req, res) => {
  try {
    const todos = await toDoModel.getAllToDos();
    res.json(todos);
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createToDo = async (req, res) => {
  const { title, content} = req.body;
  try {
    const newTodo = await toDoModel.createToDo(
        title,
        content
    );
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteToDo = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTodo = await toDoModel.deleteToDo(id);
    if (deletedTodo) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllToDos,
  createToDo,
  deleteToDo,
};
