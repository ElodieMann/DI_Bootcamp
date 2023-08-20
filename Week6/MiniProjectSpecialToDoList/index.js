let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => addData(e));

function addData(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let startDate = new Date(document.getElementById("start-date").value);
  let endDate = new Date(document.getElementById("end-date").value);
  
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  let newTask = {
    id: uid(),
    name,
    description,
    startDate,
    endDate,
    isCompleted: false
  };

  tasks.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("name").value = '';
  document.getElementById("description").value = '';
  document.getElementById("start-date").value = '';
  document.getElementById("end-date").value = '';
}

function uid (){
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}