const express = require("express");
const app = express();

let data = [
  {
    id: 1,
    title: "first",
    content: "one",
  },
  {
    id: 2,
    title: "second",
    content: "two",
  },
  {
    id: 3,
    title: "third",
    content: "three",
  },
];
app.use(express.json());

app.get("/posts", (req, res) => {
  res.send(data);
});
app.get("/posts/:id", (req, res) => {
  const search = data.find((item) => item.id === Number(req.params.id));
  if (!search) {
    return res.status(404).send("Not found");
  }
  res.send(search);
});
app.post("/posts", (req, res) => {
  const newItem = {
    id: data.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  data.push(newItem);
  res.send(newItem);
});
app.put("/posts/:id", (req, res) => {
  const searchIndex = data.findIndex((item) => item.id === Number(req.params.id));
  if (searchIndex === -1) {
    return res.status(404).send("Not found");
  }

  data[searchIndex] = {
    id: data[searchIndex].id,
    title: req.body.title,
    content: req.body.content,
  };

  res.send(data[searchIndex]);
});
app.delete("/posts/:id", (req, res) => {
  const searchIndex = data.findIndex((item) => item.id === Number(req.params.id));
  if (searchIndex === -1) {
    return res.status(404).send("Not found");
  }

  const deletedItem = data.splice(searchIndex, 1)[0];
  res.send(deletedItem);
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
