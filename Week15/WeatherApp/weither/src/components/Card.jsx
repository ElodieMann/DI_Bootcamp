import React from "react";

const Card = ({ data }) => {
    if (!data || !data.main || !data.weather || !data.wind || !data.sys) {
        return <div>Not found...</div>;
    }
  return (
    <div className="card">
      <p>
        <span>Location: </span>
        {data.name}, {data.sys.country}
      </p>
      <p>
        <span>Temperature: </span>
        {data.main.temp} °C
      </p>
      <p>
        <span>Humidity: </span>
        {data.main.humidity}
      </p>
      <p>
        <span>Condition: </span>
        {data.weather[0].description}
      </p>
      <p>
        <span>Wind: </span>
        {data.wind.speed}
      </p>
      <p>
        <span>Pressure: </span>
        {data.main.pressure}
      </p>
    </div>
  );
};

export default Card;
