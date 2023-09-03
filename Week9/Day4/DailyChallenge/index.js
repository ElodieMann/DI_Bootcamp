let input = document.getElementById("input");
let btn = document.getElementById("submit");
let section = document.querySelector("section");
let deleteAll = document.getElementById("deleteAll")

function search(str) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/random?tag=${str}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  );
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      let response = JSON.parse(xhr.responseText);
      let data = response.data;
      console.log(data);
      addGif(data);
    }
  };
  xhr.send();
}

btn.addEventListener("click", function () {
  let str = input.value;
  search(str);
});

function addGif(data) {
  let div = document.createElement("div");
  div.innerHTML = `
    <img src="${data.images.downsized.url}">
<button>DELETE</button>
    `;
  section.appendChild(div);
  let btnDelete = div.querySelector("button");
  btnDelete.addEventListener("click", function () {
    div.innerHTML = "";
    input.value = "";
  });
}

deleteAll.addEventListener('click', function () {
    section.innerHTML = ""
})