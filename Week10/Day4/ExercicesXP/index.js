//1- 
fetch("https://www.swapi.tech/api/starships/9/")
  .then((response) => response.json())
  .then((objectStarWars) => console.log(objectStarWars.result));

const asyncFunction = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
  } catch (err) {
    console.log(err);
  }
};

asyncFunction()

//2-
//calling
//resolved after 2 seconds