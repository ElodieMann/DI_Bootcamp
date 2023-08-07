// let btn = document.getElementById('btn');

// btn.addEventListener('click', function (e) {
//   e.preventDefault();
//   let input = document.getElementById("email");
//   let email = input.value.trim();
//   let atSymbol = email.indexOf("@");
//   let dotSymbol = email.lastIndexOf(".");
//   let spaceSymbol = email.indexOf(" ");

//   if (
//     atSymbol != -1 &&
//     atSymbol != 0 &&
//     dotSymbol != -1 &&
//     dotSymbol != 0 &&
//     dotSymbol > atSymbol + 1 &&
//     email.length > dotSymbol + 1 &&
//     spaceSymbol == -1
//   ) {
//     alert("Email address is valid.");
//   } else {
//     alert("Error !!! Email address is not valid.");
//   }
// });


let btn = document.getElementById('btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  let input = document.getElementById("email");
  let email = input.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    alert("Email address is valid.");
  } else {
    alert("Error !!! Email address is not valid.");
  }
});
