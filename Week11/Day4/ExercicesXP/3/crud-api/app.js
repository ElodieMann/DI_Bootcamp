const express = require("express");
const app = express();
const fetchPosts = require("./data/dataService.js");

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.send(posts);
    console.log("success");
  } catch (err) {
    res.status(404).send(err);
  }
});

app.listen(5000, () => console.log("Example app listening on port 5000!"));
