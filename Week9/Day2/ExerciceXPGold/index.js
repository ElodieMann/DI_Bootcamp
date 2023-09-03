const form = document.forms.form;

form.addEventListener("submit", function (event) {
  let firstName = document.getElementById("name").value;
  let lastName = document.getElementById("lastname").value;

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
});
