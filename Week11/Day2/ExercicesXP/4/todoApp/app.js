import TodoList from "./todo.js";

const addNewTask = new TodoList()

addNewTask.addTask("go to school")
addNewTask.addTask("do some sport")
addNewTask.addTask("go to supermarket")

addNewTask.completedTask(1)

addNewTask.listTask()