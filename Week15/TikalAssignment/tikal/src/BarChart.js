import React, { useState, useEffect } from "react";
import axios from "axios";

const BarChart = () => {
  const [planetData, setPlanetData] = useState([]);

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/planets/");
        const data = response.data.results.map((planet, index) => ({
          name: planet.name,
          population: Number(planet.population),
          number: index + 1,
        }));
        setPlanetData(data);
      } catch (error) {
        console.error("Error fetching planet data: ", error);
      }
    };
    fetchPlanetData();
  }, []);

  const getMaxPopulation = () => {
    let max = 0;
    planetData.forEach((planet) => {
      if (planet.population > max) {
        max = planet.population;
      }
    });
    return max;
  };

  const renderBars = () => {
    const maxPopulation = getMaxPopulation();
    return planetData.map((planet, index) => (
      <div key={index} style={{ marginBottom: "20px" }}>
        <div style={{ display: "inline-block", width: "100px" }}>{planet.name}</div>
        <div
          style={{
            display: "inline-block",
            width: `${(planet.population / maxPopulation) * 300}px`,
            backgroundColor: "blue",
            height: "20px",
          }}
        ></div>
      </div>
    ));
  };

  return <div>{renderBars()}</div>;
};

export default BarChart;
