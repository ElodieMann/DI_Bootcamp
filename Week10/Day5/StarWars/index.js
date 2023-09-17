let btn = document.querySelector("button");
let section = document.querySelector("section");
let loading = document.getElementById("loading");

btn.addEventListener("click", getData);

function getData() {
    section.innerHTML = "";
    section.appendChild(loading);
    loading.style.display = "block";
  
  const random = Math.floor(Math.random() * 84);


  setTimeout(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://www.swapi.tech/api/people/${random}`);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        displayPeople(data);
        getHomeworld(data.result.properties.homeworld);
      } else {
        section.removeChild(loading);
        section.innerHTML = "<p>Oh no! That person isnt available</p>"
      }
    };

    xhr.send();
  }, 2000);
}

function getHomeworld(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      let homeworldData = JSON.parse(xhr.responseText);
      displayHomeWorld(homeworldData.result.properties.name);
    }
  };

  xhr.send();
}

function displayPeople(data) {
  section.innerHTML = `
        <h1>${data.result.properties.name}</h1>
        <h2>Height: ${data.result.properties.height}</h2>
        <h2>Gender: ${data.result.properties.gender}</h2>
        <h2>Birth Year: ${data.result.properties.birth_year}</h2>
    `;
}

function displayHomeWorld(name) {
  section.innerHTML += `
        <h2>Home World: ${name}</h2>
    `;
}