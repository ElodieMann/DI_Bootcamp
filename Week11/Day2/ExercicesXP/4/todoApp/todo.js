class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    const newTask = {
      task,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  completedTask(index) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (i === index) {
        this.tasks[i].completed = true;
      }
    }
  }

  listTask() {
    this.tasks.forEach((task) => console.log(task));
  }
}

export default TodoList
