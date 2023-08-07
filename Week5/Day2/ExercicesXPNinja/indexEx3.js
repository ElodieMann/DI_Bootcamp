let btn = document.querySelector("button");

function showPosition(position) {
  navigator.geolocation.getCurrentPosition(showPosition);

  btn.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

btn.addEventListener("click", showPosition);
