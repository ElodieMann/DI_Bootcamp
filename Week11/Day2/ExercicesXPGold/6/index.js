const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const namePattern = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
rl.question('Enter your full name', (fullName) => {
    if (namePattern.test(fullName)) {
      console.log('Valid name:', fullName);
    } else {
      console.log('Invalid name. Please follow the format: Firstname Lastname.');
    }
    rl.close();
  });
