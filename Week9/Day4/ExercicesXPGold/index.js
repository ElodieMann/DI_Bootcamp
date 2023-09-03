let div = document.querySelector('div')


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.giphy.com/v1/gifs/random?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.send();

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      let response = JSON.parse(xhr.responseText);
      let image = response.data.images.downsized.url;
      div.innerHTML = `<img src="${image}">`
  };
};