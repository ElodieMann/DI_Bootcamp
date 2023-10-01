const express = require('express');
const router = express.Router();
const questionsControlleur = require('../controllers/questionsControlleur'); 

router.get('/questions/:id', questionsControlleur.getQuestion);
router.post('/questions/:id/check-answer', questionsControlleur.checkAnswer);

router.post('/user-answers/:id', questionsControlleur.saveUserAnswer);

module.exports = router;
