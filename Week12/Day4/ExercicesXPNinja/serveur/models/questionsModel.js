const db = require("../config/knex");

const getAllQuestions = async () => {
  const questions = await db.select("*").from("questions");
  return questions;
};
const getQuestionById = async (id) => {
  const questions = await db.select("*").from("questions").where("id", id);
  return questions;
};

const getOptionsForQuestion = async (questionId) => {
  const options = await db
    .select("*")
    .from("options")
    .innerJoin("questions_options", "options.id", "questions_options.option_id")
    .where("questions_options.question_id", questionId);
  return options;
};

const isOptionCorrect = async (questionId, optionId) => {
  try {
    const correctAnswer = await db
      .select("correct_answer_id")
      .from("questions")
      .where("id", questionId);
    return correctAnswer?.[0].correct_answer_id === optionId;
  } catch (e) {
    console.log("error isOptionCorrect", e);
  }
};
const getAllOptions = async () => {
  const options = await db.select("*").from("options");
  console.log("getAllOptions", options);
  return options;
};

// const createOption = async (optionText) => {
//   const newOption = await db('options').insert({ optionText });
//   return newOption;
// };

const saveUserAnswer = async (userId, questionId, optionId) => {
  try {
    await db("user_answers").insert({
      user_id: userId,
      question_id: questionId,
      option_id: optionId,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllQuestions,
  getOptionsForQuestion,
  isOptionCorrect,
  getAllOptions,
  getQuestionById,
  // createOption,
  saveUserAnswer,
};
