const express = require("express");
const router = express.Router();
const toDoController = require("../controllers/controllers");

router.get("/", toDoController.getAllToDos);
router.post("/", toDoController.createToDo);
router.delete("/:id", toDoController.deleteToDo);

module.exports = router;
