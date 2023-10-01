const db = require('../config/knex')

const getAllTasks = () => {
    return db.select("id", "title", "completed").from("tasks")
}

const getTaskById = (id) => {
    return db.select("id", "title", "completed").from('tasks').where({ id })
}

const createTask = (title, completed) => {
    return db('tasks').insert({ title, completed}).returning(['id', 'title', 'completed'])
}

const updateTask = (id, title, completed) => {
    return db('tasks').where('id', id).update({ title, completed}).returning(['id', 'title', 'completed'])
}

const deleteTask  = id => {
    return db('tasks').where('id', id).del().returning(['id', 'title', 'completed'])
}

module.exports = {
    getAllTasks, 
    getTaskById, 
    createTask, 
    updateTask, 
    deleteTask 
}