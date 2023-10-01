const express = require('express')
const router = express.Router()
const posts = [];

router.get('/', (req, res) => {
    res.json(posts)
})
router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = posts.findIndex(post => post.id === id)
    
    if (index === -1) {
        return res.status(404).send("post not found");
    }
    res.json(posts[index])
})


router.post('/', (req, res) => {
    
    const newPost = {
        id: posts.length +1,
        title: req.body.title,
        content: req.body.content, 
        timestamp: new Date()
    }

    posts.push(newPost)

  

    res.status(201).json(newPost);
})




router.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = posts.findIndex(post => post.id === id)

    if (index === -1) {
        return res.status(404).send("post not found");
    }

    const updatedPost = {
        id: posts[index].id,
        title: req.body.title,
        content: req.body.content, 
        timestamp: new Date()
      };
      posts[index] = updatedPost;
      res.status(200).json("post updated");
})



router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = posts.findIndex(post => post.id === id)

    if (index === -1) {
        return res.status(404).send("post not found");
    }

    posts.splice(index, 1)
      res.status(200).json("post deleted");
})


module.exports = router
