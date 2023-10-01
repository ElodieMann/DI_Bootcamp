const express = require('express')
const router = express.Router()
const todos = [];

router.get('/', (req, res) => {
    res.json(todos)
})


router.post('/', (req, res) => {
    
    const newTodo = {
        id: todos.length +1,
        title: req.body.title,
        content: req.body.content, 
        isCompleted: req.body.isCompleted
    }

    todos.push(newTodo)

    res.status(201).json(newTodo);
})




router.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = todos.findIndex(todo => todo.id === id)

    if (index === -1) {
        return res.status(404).send("Todo not found");
    }

    const updatedTodo = {
        id: todos[index].id,
        title: req.body.title,
        content: req.body.content, 
        isCompleted: req.body.isCompleted
      };
      todos[index] = updatedTodo;
      res.status(200).json("Todo updated");
})



router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = todos.findIndex(todo => todo.id === id)

    if (index === -1) {
        return res.status(404).send("Todo not found");
    }

   todos.splice(index, 1)
      res.status(200).json("Todo deleted");
})


module.exports = router
