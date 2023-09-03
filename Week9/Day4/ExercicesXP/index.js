//1-
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(JSON.parse(xhr.responseText)); 
  }
};

xhr.send();

//2-
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2');

xhr2.onload = function () {
  if (xhr2.status >= 200 && xhr2.status < 300) {
    console.log(JSON.parse(xhr2.responseText)); 
  }
};

xhr2.send();