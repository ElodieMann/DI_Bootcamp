let tasks = [];
let ID = 0;
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let list = document.querySelector(".listTasks");

submit.addEventListener("click", (e) => addTask(e));

function addTask(e) {
  e.preventDefault();
  toDo = input.value;
  let obj = {};
  if (toDo.length !== 0) {
    obj = {
      task_id: ID,
      text: toDo,
      done: false,
    };

    tasks.push(obj);

    let div = document.createElement("div");
    div.classList.add("div");
    div.setAttribute("data-task-id", obj.task_id);
    list.appendChild(div);

    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.classList.add("button");
    div.appendChild(btn);

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    div.appendChild(check);
    console.log(check);

    let para = document.createElement("p");
    div.appendChild(para);

    para.textContent = toDo;
    input.value = "";

    console.log(tasks);

    check.addEventListener("change", () => doneTask(obj.task_id));
    btn.addEventListener("click", () => deleteTask(obj.task_id));
  }
  console.log(list);
  ID++;
}

function doneTask(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task_id === id) {
      tasks[i].done = !tasks[i].done;
    }
    const checkbox = document.querySelector(`[data-task-id="${id}"] input[type="checkbox"]`);
    const parentDiv = checkbox.parentElement;
    console.log(parentDiv);
    const child = parentDiv.lastChild
    console.log();
    child.style.textDecoration = "line-through"
    child.style.color = "red"
  }
}

function deleteTask(id) {
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].task_id === id) {
    const div = document.querySelector(`[data-task-id="${id}"]`)
    tasks.splice(i, 1)
    div.remove()
  }
}

}

