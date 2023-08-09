// Exercice 1
const menu = [
  {
    type: "starter",
    name: "Houmous with Pita",
  },
  {
    type: "starter",
    name: "Vegetable Soup with Houmous peas",
  },
  {
    type: "dessert",
    name: "Chocolate Cake",
  },
];

menu.some((element) =>
  element.type === "dessert" ? console.log(true) : console.log(false)
);
const every = menu.every((element) => element.type == "starter");
console.log(every);

const mainCourse = menu.some((element) =>
  element.type === "main course" ? true : false
);

!mainCourse ? (menu[1].type = "main course") : null;
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

vegetarian.forEach((element) => {
  menu.forEach((item, i) => {
    item.name.toLocaleLowerCase().includes(element.toLowerCase())
      ? (item.vegetarian = true)
      : null;
  });
});

console.log(menu);

// Exercice 2
const stringChop = (str, num) => {
  let arr = [];
  for (let i = 0; i < str.length; i += num) {
    arr.push(str.slice(i, i + num));
  }

  console.log(arr);
};

stringChop("developers", 4);

// Exercice 3

const searchWord = (str, str2) => {
  let arr = [];
  let strToArray = str.split(" ");
  for (let i = 0; i < strToArray.length; i++) {
    strToArray[i] === str2 ? arr.push(strToArray[i]) : null;
  }
  str.includes(str2);
  let time;
  arr.length <= 1 ? (time = "time") : (time = "times");
  console.log(`'${str2}' was found ${arr.length} ${time}`);
};
searchWord("The quick brown fox", "fox");

// Exercice 4

const reverseArray = (arr) => {
  console.log(arr.reverse());
};

reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
