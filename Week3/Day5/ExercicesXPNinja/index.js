//Exercice 1
const person1 = {
  fullname: "Robert Manson",
  mass: 110,
  height: 1.72,
  bmi: function () {
    return this.mass / (this.height * this.height);
  },
};
const person2 = {
  fullname: "Steve Jobs",
  mass: 87,
  height: 1.89,
  bmi: function () {
    return this.mass / (this.height * this.height);
  },
};

function compare() {
  if (person1.bmi() > person2.bmi()) {
    console.log(person1["fullname"] + " has the largest BMI");
  } else {
    console.log(person2["fullname"] + " has the largest BMI");
  }
}

compare();

//Exercice2

function findAvg(gradeList) {
  let sum = 0;
  for (let i = 0; i < gradeList.length; i++) {
    sum += gradeList[i];
  }
  let average = sum / gradeList.length;
  console.log(average);

  if (average > 65) {
    console.log("you passed!");
  } else {
    console.log("you have to repeat the course");
  }
}
let gradeList = [98, 28, 25, 68, 77];

findAvg(gradeList);



//Bonus

function findAvg2(gradeList2) {
  let sum2 = 0;
  for (let i = 0; i < gradeList2.length; i++) {
    sum2 += gradeList2[i];
  }

  return average2 = sum2 / gradeList2.length;
  
}

function passOrNot2() {
  if (findAvg2(gradeList2) > 65) {
    console.log("you passed!");
  } else {
    console.log("you have to repeat the course");
  }
}

let gradeList2 = [56, 48, 100, 68, 77];

passOrNot2();
