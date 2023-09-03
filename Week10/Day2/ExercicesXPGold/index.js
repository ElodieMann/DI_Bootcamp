const urls = [
    "https://www.swapi.tech/api/people/1",
    "https://www.swa<pi.tech/api/people/2",
    "https://www.swapi.tech/api/people/3",
    "https://www.swapi.tech/api/people/4",
  ];
  
  let requests = urls.map((url) => {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          let response = JSON.parse(xhr.responseText);
          let data = response.result.properties;
          resolve(data);
        } else {
          reject(xhr.status);
        }
      };
      xhr.onerror = function () {
          reject("ughhhh fix it ! " + url);
        };
      xhr.open("GET", url);
      xhr.send();
    });
  });
  
  Promise.all(requests)
    .then((responses) => responses.forEach((response) => console.log(response)))
    .catch((error) => console.log(error));