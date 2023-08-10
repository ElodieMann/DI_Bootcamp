// Exercice 1
const sumNmbers = (a, b) => a + b;

console.log(sumNmbers(5, 9));

// Exercice 2
function gram(a) {
  return a * 1000;
}

console.log(gram(5));

const gram2 = function (a) {
  return a * 1000;
};

console.log(gram2(5));

// the difference is that de function expression is anonyme, whitout name

const gram3 = (a) => a * 1000;
console.log(gram3(5));

// Exercice 3
(function (childNumber, partner, location, job) {
  let body = document.querySelector("body");
  const para = document.createElement("p");
  body.appendChild(para);
  para.innerHTML = `You will be a ${job} in ${location}, and married to ${partner} with ${childNumber}`;
})(5, "Sarah", "Jerusalem", "developer");

//Exercice 4


(function (name) {
    name = prompt('What\'s your name ?')
    let nav = document.querySelector('nav')
    let div = document.createElement('div')
    nav.appendChild(div)
    div.innerHTML = `
    <p>Hello ${name}</p>
    <img src="./téléchargement.jpeg">
    `
    div.classList.add('navName')
}) (name)

// Exercice 5

function makeJuice (sizeDrink) {
    function addIngredients (firstIng, secondIng, thirdIng) {
        let body = document.querySelector("body");
        const para = document.createElement("p");
        body.appendChild(para);
        para.innerHTML = `The client wants a ${sizeDrink} juice, containing ${firstIng}, ${secondIng}, ${thirdIng}`;
    }
    addIngredients('chocolate', 'vanila', 'peanut')
}

makeJuice('small')


function makeJuice2 (sizeDrink) {
    let ingredients = []
    function addIngredients2 (firstIng, secondIng, thirdIng) {
        ingredients.push(firstIng, secondIng, thirdIng)
    }   
    function displayJuice () {
        let body = document.querySelector("body");
        const para = document.createElement("p");
        body.appendChild(para);
        para.innerHTML = `The client wants a ${sizeDrink} juice, containing ${ingredients.join(', ')}`;
    }
    addIngredients2('cherry', 'orange', 'banana')
    addIngredients2('strawberry', 'apple', 'pear')
  
    console.log(ingredients);

    
    displayJuice()
}

makeJuice2('small')

