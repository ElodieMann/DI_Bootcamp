const { default: axios } = require("axios");
const express = require("express");
const app = express();

app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.send(response.data);
  } catch (err) {
    throw err;
  }
});


app.get("/api/posts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    res.send(response.data);
  } catch (err) {
    throw err;
  }
});


app.post("/api/posts", async (req, res) => {
  try {
    
    const { userId, id, title, body } = req.body;
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts", { userId, id, title, body } 
    );
    res.send(response.data);
  } catch (err) {
    throw err;
  }
});


app.put("/api/posts/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const { userId, title, body } = req.body;

      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`, { userId, title, body } 
      );
      res.send(response.data);
    } catch (err) {
      throw err;
    }
});


app.delete("/api/posts/:id", async (req, res) => {
    const id = req.params.id;
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    res.send(response.data);
  } catch (err) {
    throw err;
  }
});

app.listen(5000, () => console.log("Example app listening on port 5000!"));
