const tasksModel = require('../models/tasksModel')

const getAllTasks = async (req, res) => {
    try{
        const tasks = await tasksModel.getAllTasks()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({error : 'Internal server error'})
    }
}

const getTaskById = async (req, res) => {
    const id = req.params.id
    try {
        const task = await tasksModel.getTaskById(id)
        if (task) {
            res.json(task)
        } else {
            res.status(404).json({error: 'Post not found'})
        }
    } catch (error) {
        res.status(500).json({error: 'Internal server error'})
    }
}

const createTask = async (req, res) => {
    const { title, completed } = req.body;
    try {
        const newTask = await tasksModel.createTask(title, completed)
        res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
}

const updateTask = async (req, res) => {
    const id = req.params.id;
    const { title, completed } = req.body;
    try {
      const updatedTask = await tasksModel.updateTask(id, title, completed);
      if (updatedTask) {
        res.json(updatedTask);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
      const deletedTask = await tasksModel.deleteTask(id);
      if (deletedTask) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
  }