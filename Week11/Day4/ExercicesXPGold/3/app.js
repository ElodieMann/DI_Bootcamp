const express = require("express");
const app = express();
let todos = [];

app.use(express.json());

app.post("/api/todos", (req, res) => {
  const newToDo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: req.body.completed,
  };

  todos.push(newToDo)
  res.status(201).json(newToDo)
});


app.get("/api/todos", (req, res) => {
  res.send(todos);
});


app.get("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const response = todos.find((todo) => todo.id === id);
  if (!response) {
    res.status(404).send("Todo not found");
  }
  res.send(response);
});


app.put("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const response = todos.findIndex((todo) => todo.id === id);
  if (response === -1) {
    return res.status(404).send("Todo not found");
  }
  const updatedTodo = {
    id: todos[response].id,
    title: req.body.title,
    completed: req.body.completed,
  };
  todos[response] = updatedTodo;
  res.status(200).json("Todo updated");
});


app.delete("/api/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const response = todos.findIndex((todo) => todo.id === id);
    if (response === -1) {
      return res.status(404).send("Todo not found");
    }
   
    todos.splice(response, 1)
    res.status(200).json("Todo deleted");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
