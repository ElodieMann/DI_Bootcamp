import people from "./data.js";

const ageAverage = (list) => {
  let sum = 0;
  for (let someone of list) {
    sum += someone.age;
  }
  const average = sum / list.length
  console.log(average);
};

ageAverage(people);
