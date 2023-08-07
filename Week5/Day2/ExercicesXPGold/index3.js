let shoppingList = [];

let div = document.getElementById("root");

let input = document.createElement("input");
input.setAttribute("type", "text");
div.appendChild(input);

let btn = document.createElement("button");
btn.textContent = "AddItem";
div.appendChild(btn);

btn.addEventListener("click", function addItem() {
  shoppingList.push(input.value);
  console.log(shoppingList);
});

let clr = document.createElement("button");
clr.textContent = "ClearAll";
div.appendChild(clr);

clr.addEventListener("click", function clearAll () {
    shoppingList = []
    console.log(shoppingList);

    });
