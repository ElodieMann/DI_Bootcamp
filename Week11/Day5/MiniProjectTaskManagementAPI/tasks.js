const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require('path');

function getData() {
  try {
    const usersFilePath = path.join(__dirname, 'tasks.json');
    const data = fs.readFileSync(usersFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
}

function saveData(data) {
  try {
    const usersFilePath = path.join(__dirname, 'tasks.json');
    fs.writeFileSync(usersFilePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

router.get("/", (req, res) => {
  const dataTasks = getData();
  res.json(dataTasks);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const dataTasks = getData();
  const task = dataTasks.find((taskItem) => taskItem.id === Number(id));

  if (!task) {
    return res.status(404).send("Task not found");
  }
  res.json(task);
});

router.post("/", (req, res) => {
  const dataTasks = getData();
  const newTask = {
    id: dataTasks.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  dataTasks.push(newTask);
  saveData(dataTasks);

  res.status(201).json(newTask);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const dataTasks = getData();
  const index = dataTasks.findIndex((taskItem) => taskItem.id === Number(id));

  if (index === -1) {
    return res.status(404).send("Task not found");
  }

  const updatedTask = {
    id: id,
    title: req.body.title,
    content: req.body.content,
  };

  dataTasks[index] = updatedTask;
  saveData(dataTasks);

  res.status(200).json(updatedTask);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const dataTasks = getData();
  const index = dataTasks.findIndex((taskItem) => taskItem.id === Number(id));

  if (index === -1) {
    return res.status(404).send("Task not found");
  }

  dataTasks.splice(index, 1);
  saveData(dataTasks);

  res.status(200).json({ message: "Task deleted successfully" });
});

module.exports = router;
