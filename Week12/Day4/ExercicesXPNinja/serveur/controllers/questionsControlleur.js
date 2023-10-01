const questionsModel = require('../models/questionsModel');

const getQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;
    const question = await questionsModel.getQuestionById(questionId);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    const options = await questionsModel.getOptionsForQuestion(questionId);
    res.json({ question, options });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const checkAnswer = async (req, res) => {
  try {
    const questionId = req.params.id;
    const optionId = req.body.optionId;
    const isCorrect = await questionsModel.isOptionCorrect(questionId, optionId);
    console.log(isCorrect);
    res.json({ isCorrect });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllOptions = async (req, res) => {
    try {
      const options = await optionsModel.getAllOptions();
      res.json(options);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  const saveUserAnswer = async (req, res) => {
    try {
      const questionId = req.params.id;
      const optionId = req.body.optionId;
      const userId = req.body.userId; 
      await userAnswersModel.saveUserAnswer(userId, questionId, optionId);
      res.status(204).send(); 
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

module.exports = {
  getQuestion,
  checkAnswer,
  getAllOptions,
  saveUserAnswer
};
