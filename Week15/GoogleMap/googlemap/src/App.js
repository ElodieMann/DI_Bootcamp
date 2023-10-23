import React, { useEffect } from "react";
import "./App.css";
import { Loader } from "@googlemaps/js-api-loader";

function App() {
  let map;

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAg0Cb_GqtXXBs88aRcaRpbixOi9o6mv9k",
      version: "weekly",
    });

    loader.load().then(() => {
      map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.0853, lng: 34.7818 },
        zoom: 8,
      });
    });
  }, []);

  return (
    <div className="App">
      <h1>GOOGLE MAPS API with REACT JS</h1>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
}

export default App;
