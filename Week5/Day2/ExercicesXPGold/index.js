// Exercice 1
let select = document.getElementById("genres")
console.log(select.value);

const newSelect = document.createElement('option')
newSelect.innerText = "Classic"
newSelect.value = "classic"
select.appendChild(newSelect);
newSelect.selected = "selected"

