const { faker } = require("@faker-js/faker");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const users = [];

// function addUser() {
//   const user = {
//     firstname: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     address: {
//       street: faker.location.streetAddress(),
//       country: faker.location.country(),
//     },
//   };
//   users.push(user);
// }

function addUser() {
  rl.question("Enter your first name: ", (firstName) => {
    rl.question("Enter your last name: ", (lastName) => {
      rl.question("Enter your street address: ", (street) => {
        rl.question("Enter your country: ", (country) => {
          const user = {
            firstname: firstName,
            lastName: lastName,
            address: {
              street: street,
              country: country,
            },
          };
          users.push(user);
          rl.close();
          console.log(users);
        });
      });
    });
  });
}

addUser();




