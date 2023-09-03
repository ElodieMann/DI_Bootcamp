let input = document.getElementById("input");
let btn = document.getElementById("btn");
let section = document.querySelector("section");
let delet = document.getElementById('dlt')
let data;




function search(str) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=${str}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  );
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      let response = JSON.parse(xhr.responseText);
      let data = response.data;
      console.log(data);
      displayGif(data);
    }
  };
  xhr.send();
}

function displayGif(data) {
  section.innerHTML = "";
  let display = data.map((item) => {
    let img = document.createElement("div");

    img.innerHTML = `<img src="${item.images.downsized.url}">`;
    section.appendChild(img);
  });
}

function remove () {
  section.innerHTML = ""
  input.value = ""
}

btn.addEventListener("click", function () {
  str = input.value;
  search(str);
});

delet.addEventListener('click', remove)