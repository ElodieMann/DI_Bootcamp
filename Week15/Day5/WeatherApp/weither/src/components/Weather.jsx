import React, { useState } from "react";
import Card from "./Card";

const Weather = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [submited, setSubmitted] = useState(false);

  const fetchWeather = async () => {
    try {
      const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=fbae3467dff3ac9d3ec72e16e6ea1b3b&units=metric
        `);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchWeather();
      setSubmitted(true);
    };

  return (
    <div className="data">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input type="submit" value="get Weather" />
      </form>
      {submited && <Card data={data} />}
    </div>
  );
};

export default Weather;
