//1-
function promiseAll(...arr) {
  return Promise.all([...arr])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.log("the error is " + error);
    });
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

promiseAll(promise1, promise2, promise3);

//2-

const lat1 = document.getElementById("lat1");
const lon1 = document.getElementById("lon1");
const lar2 = document.getElementById("lat2");
const lon2 = document.getElementById("lon2");
const btn = document.getElementById("submit");
let para = document.querySelector("p");

btn.addEventListener("click", async function (e) {
  e.preventDefault();
  let valuelat1 = lat1.value;
  let valuelon1 = lon1.value;
  let valuelat2 = lat2.value;
  let valuelon2 = lon2.value;

  const promise1 = fetch(
    `https://api.sunrise-sunset.org/json?lat=${valuelat1}&lng=${valuelon1}`
  ).then((response) => {
    return response.json();
  });

  const promise2 = fetch(
    `https://api.sunrise-sunset.org/json?lat=${valuelat2}&lng=${valuelon2}`
  ).then((response) => {
    return response.json();
  });

  Promise.all([promise1, promise2])
    .then(
      ([data1, data2]) =>
        (para.textContent = `Sunrise 1 : ${data1.results.sunrise}  Sunrise 2 : ${data2.results.sunrise}`)
    )
    .catch((error) => console.log(error));
});
