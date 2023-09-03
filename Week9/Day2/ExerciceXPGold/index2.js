const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");

const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");

firstNameElement.textContent = `First Name: ${firstName}`;
lastNameElement.textContent = `Last Name: ${lastName}`;
