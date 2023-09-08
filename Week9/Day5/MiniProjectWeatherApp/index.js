const input = document.getElementById("input");
const form = document.forms.form;
const section = document.querySelector("section");
const toggle = document.querySelector(".form-check");
const x = document.querySelector("p");
console.log(toggle);
let temp = "imperial";
let signe = "F";
let icon;
let city = "";

toggle.addEventListener("click", modeTemp);
form.addEventListener("submit", getCity);

const getAPI = async () => {
  
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${temp}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`
  )
    .then((response) => response.json())
    .then((data) => displayCity(data))
    .catch((error) => alert(error));
};

function modeTemp() {
  toggle.classList.toggle("selected");
  temp = toggle.classList.contains("selected") ? "metric" : "imperial";
  signe = toggle.classList.contains("selected") ? "°C" : "F";

  updateCardTemp();
}

function getCity(e) {
  e.preventDefault();
  city = input.value.toLowerCase();
  input.value = "";

  getAPI();
}

function displayCity(data) {
  console.log(data);
  const existing = document.querySelector(`[data-city="${data.name}"]`);

  if (existing) {
    const existingCard = existing.querySelector(".temperature");
    existingCard.textContent = `${data.main.temp} ${signe}`;
  } else {
    let div = document.createElement("div");
    div.classList.add("card");

    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset; 

    div.innerHTML = `
  <button>X</button>
    <h1>${data.name}, ${data.sys.country}</h1>
    <img src='https://openweathermap.org/img/wn/${
      data.weather[0].icon
    }@2x.png' alt='icon'>
    <h3 class="temperature">${data.main.temp}</span> ${signe}</h3>
    <h4>${data.weather[0].description}</h4> 
    <p> Wind : ${data.wind.deg} </p>
    <p>Sunrise : ${timeStamp(sunrise)}</p>
    <p>Sunset : ${timeStamp(sunset)}</p>
  `;

    div.setAttribute("data-city", data.name);
    section.appendChild(div);
    let btn = div.querySelector("button");
    btn.addEventListener("click", function () {
      div.remove();
      
    });
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

function updateCardTemp () {
  const cards = document.querySelectorAll(".card");
  cards.forEach(async (card) => {
    const cityName = card.getAttribute("data-city");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${temp}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`
      );
      const data = await response.json(); 
      const temperatureElement = card.querySelector(".temperature");
      temperatureElement.textContent = `${data.main.temp} ${signe}`;
    } catch (error) {
      console.error(error);
    }
  });
}


function timeStamp(timestamp) {
  const date = new Date(timestamp * 1000);
  
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  return `${hour}:${minutes}:${seconds}`;
}

getLocation();