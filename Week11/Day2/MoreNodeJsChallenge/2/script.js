const minutesLife = require("./date")

// const birthday = "1992-09-14"

// console.log(minutesLife(birthday));

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Where are you born?', birthday => {
    console.log(minutesLife(birthday));
    readline.close();
  });