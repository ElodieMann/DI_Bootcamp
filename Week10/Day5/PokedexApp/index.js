const upSection = document.getElementById("up");
const downSection = document.getElementById("down");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const middleBtn = document.getElementById("middleBtn");
const loading = document.getElementById('loading')
let pokeItem = [];
let random;

middleBtn.addEventListener("click", function () {
    downSection.innerHTML = ""
downSection.appendChild(loading)
loading.style.display = 'block'
    random = Math.floor(Math.random() * 100);
    setTimeout(() => {

        getAPI(random)
    }, 2000)
});
leftBtn.addEventListener("click", removeOne)
rightBtn.addEventListener("click", addOne)

async function getAPI(random) {
    
  try {
    
    await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`)
      .then((response) => response.json())
      .then((data) => (pokeItem = data))
      .then((pokeItem) => addPokemon(pokeItem));

    console.log(pokeItem);
  } catch (error) {
    downSection.innerHTML = "Oh no! That Pokemon isn’t available…";
  }

  console.log(random);
}

function addPokemon() {
  downSection.innerHTML = `
     <h1>${pokeItem.forms[0].name}</h1>
     <h2>Pokemon n° ${pokeItem.id}</h2>
     <h2>Height: ${pokeItem.height}</h2>
     <h2>Weight: ${pokeItem.weight}</h2>
     <h2>Type: ${pokeItem.types[0].type.name}</h2>
     
     
     `;

     upSection.innerHTML = `
     
     <img id='pokeImg' src="${pokeItem.sprites.front_default}" alt="Pokemon Image">
     `
}


function removeOne() {
    random --
    getAPI(random)
}
function addOne() {
    random ++
    getAPI(random)
}