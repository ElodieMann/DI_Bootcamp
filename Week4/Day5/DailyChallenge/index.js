// const planets = [
//   "Mercury",
//   "Venus",
//   "Earth",
//   "Mars",
//   "Jupiter",
//   "Saturn",
//   "Uranus",
//   "Neptune",
// ];
let section = document.querySelector(".listPlanets");

// planets.forEach((planet) => {
//   let div = document.createElement("div");
//   div.classList.add("planet");
//   div.classList.add(planet);
//   div.style.backgroundColor = `rgb(${Math.floor(
//     Math.random() * 255
//   )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
//   section.appendChild(div);
// });

const moons = {
  Mercury: 0,
  Venus: 0,
  Earth: 1,
  Mars: 2,
  Jupiter: 79,
  Saturn: 82,
  Uranus: 27,
  Neptune: 14,
};

for (const planet in moons) {
  let div = document.createElement("div");
  div.classList.add("planet");
  div.classList.add(planet);
  div.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  section.appendChild(div);

  let count = moons[planet];
  for (let i = 0; i < count; i++) {
    let divMoon = document.createElement("div");
    divMoon.classList.add("moon");
    divMoon.classList.add(i);
    divMoon.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    divMoon.style.right = `-${(i + 1) * 40}px`
    divMoon.style.top = `40px`
   
    div.appendChild(divMoon);
  }
}
