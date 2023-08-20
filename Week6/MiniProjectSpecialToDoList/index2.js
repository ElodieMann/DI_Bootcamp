let tasksList = document.getElementById("tasksList");

let tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.sort((a, b) => {
  const dateA = new Date(a.startDate);
  const dateB = new Date(b.startDate);
  return dateA - dateB;
});
tasks.forEach((task) => {
  const now = new Date();
  const end = new Date(task.endDate);
  const timeDiff = end - now;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  let li = document.createElement("li");
  li.innerHTML = `
  <div>
  <button>X<button>
  </div>
    <div class='item'>
      <h1 class="title">Name : ${task.name}</h1>
      <h2 class="date">Start Date : ${task.startDate}</h2>
      <input type="submit" class="btn" value="Modify !" />
      <h2 class="dayslefth2">Days Left : ${daysLeft} days</h2>
      <p class="toggle"> Description : ${task.description} </p>
    </div>
  
      <input type="checkbox" class="check">

  `;
  li.style.display = "flex";
  li.style.gap = "40px";
  li.style.backgroundColor = task.isCompleted ? "green" : "red";
  li.setAttribute("data-id", task.id);

  if (end - now < 0) {
    li.style.backgroundColor = "yellow";
  }

  tasksList.appendChild(li);

  const item = li.querySelector(".item");
  item.addEventListener("click", () => addDescription(item));

  let check = li.querySelector(".check");
  check.checked = task.isCompleted;
  check.addEventListener("change", () => isChecked(task.id));

  const btn = li.querySelector("button");
  btn.addEventListener("click", () => removeTask(task.id, li));

  const title = li.querySelector(".title");
  title.addEventListener("dblclick", () => changeTitle(task.id, title));

  const date = li.querySelector(".date");
  const btnDate = li.querySelector(".btn");
  btnDate.style.display = "none";
  const dayslefth2 = li.querySelector('.dayslefth2')
  console.log(dayslefth2);
  date.addEventListener("dblclick", () => changeDate(task.id, date, btnDate, dayslefth2));
});

function addDescription(item) {
  let descri = item.querySelector(".toggle");
  descri.classList.toggle("active");
}

function isChecked(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].isCompleted = !tasks[i].isCompleted;
      const checkbox = document.querySelector(
        `[data-id="${id}"] input[type="checkbox"]`
      );
      const parentDiv = checkbox.parentElement;
      if (tasks[i].isCompleted) {
        parentDiv.style.backgroundColor = "green";
      } else {
        parentDiv.style.backgroundColor = "red";
      }
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(id, li) {
  if (confirm("Are you sure?")) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        tasks.splice(i, 1);
        li.remove();
      }
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function changeTitle(id, title) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      let newTitle = prompt("new title");
      tasks[i].name = newTitle;
      console.log(tasks);
      title.textContent = `Name : ${newTitle}`;
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function changeDate(id, date, btnDate, dayslefth2) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      date.innerHTML = `<input type="datetime-local" name="start-date" class="changestartdate"/>`;
      const input = document.querySelector(".changestartdate");
      btnDate.style.display = "block";
      btnDate.addEventListener("click", function (e) {
        e.preventDefault()
        btnDate.style.display = "none";

        const newStartDate = input.value;
        const now = new Date();
        const end = new Date(tasks[i].endDate);
        const timeDiff = end - now;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        
        date.textContent = `StartDate : ${input.value}`;
        dayslefth2.textContent = `Days Left : ${daysLeft} days`;
        tasks[i].startDate = newStartDate;
        tasks[i].daysleft = daysLeft

       
      });
    }
  }
  console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}