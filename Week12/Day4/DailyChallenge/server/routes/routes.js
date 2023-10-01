//routes.js
const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')

router.get('/users', controllers.getAllRegisters)
router.get('/users/:id', controllers.getUserById)
router.post('/register', controllers.createUser)
router.post('/login', controllers.loginUser)
router.put('/users/:id', controllers.updateUser)

module.exports = router