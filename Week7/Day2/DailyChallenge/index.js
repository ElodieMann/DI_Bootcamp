const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

let arr = [];
let arr2 = [];

gameInfo.forEach((element) => {
  arr.push(`${element.username}!`);
});

console.log(arr);

gameInfo.forEach((element) => {
  element.score > 5 ? arr2.push(element.username) : null;
});

console.log(arr2);

let sum = 0;
gameInfo.forEach((element) => {
  sum += element.score;
});

console.log(sum);
