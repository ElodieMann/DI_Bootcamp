import React, { useState, useEffect } from "react";
import axios from "axios";
import BarChart from "./BarChart";

const App = () => {
  const [vehicleName, setVehicleName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [result, setResult] = useState({ highestPopulatedVehicle: "", planet: "", pilots: [] });

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people/");
        const data = response.data.results;
        const highestPopulationVehicle = findHighestPopulationVehicles(data);
        setResult(highestPopulationVehicle);
        fetchPlanetName(highestPopulationVehicle.planet);
        fetchVehicleDetails(highestPopulationVehicle.highestPopulatedVehicle);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const findHighestPopulationVehicles = (data) => {
    const planetPopulations = {};
    data.forEach((person) => {
      if (person.homeworld) {
        planetPopulations[person.homeworld] = planetPopulations[person.homeworld]
          ? planetPopulations[person.homeworld] + 1
          : 1;
      }
    });

    const highestPopulationPlanet = Object.keys(planetPopulations).reduce(
      (a, b) => (planetPopulations[a] > planetPopulations[b] ? a : b),
      ""
    );

    const pilotsByPlanet = data.filter(
      (person) => person.homeworld === highestPopulationPlanet
    );

    const vehicles = {};
    pilotsByPlanet.forEach((pilot) => {
      if (pilot.vehicles && pilot.vehicles.length > 0) {
        pilot.vehicles.forEach((vehicleUrl) => {
          vehicles[vehicleUrl] = vehicles[vehicleUrl]
            ? vehicles[vehicleUrl] + 1
            : 1;
        });
      }
    });

    const highestPopulatedVehicle = Object.keys(vehicles).reduce(
      (a, b) => (vehicles[a] > vehicles[b] ? a : b),
      ""
    );

    return {
      highestPopulatedVehicle: highestPopulatedVehicle,
      planet: highestPopulationPlanet,
      pilots: pilotsByPlanet.map((pilot) => pilot.name),
    };
  };

  const fetchPlanetName = async (planetUrl) => {
    try {
      const response = await axios.get(planetUrl);
      setPlanetName(response.data.name);
    } catch (error) {
      console.error("Error fetching planet data: ", error);
    }
  };

  const fetchVehicleDetails = async (vehicleUrl) => {
    try {
      const response = await axios.get(vehicleUrl);
      setVehicleName(response.data.name);
    } catch (error) {
      console.error("Error fetching vehicle data: ", error);
    }
  };



  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Vehicle name with the largest sum</th>
            <th>{result.highestPopulatedVehicle}</th>
          </tr>
          <tr>
            <th>Related home planets and their respective population</th>
            <th>{planetName}</th>
          </tr>
          <tr>
            <th>Related pilot names</th>
            <th>
              {result.pilots.map((pilot, index) => (
                <p key={index}>{pilot}</p>
              ))}
            </th>
          </tr>
        </tbody>
      </table>

      <BarChart />
    </div>

  );
};

export default App;
