import axios from "axios";
import chalk from "chalk";

function getWeather(city) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`
    )

    .then((res) => {
      const weatherData = res.data;
      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      console.log(chalk.blue(`Weather for ${city}:`));
      console.log(`Temperature : ${chalk.yellow(temperature)}°C`);
      console.log(`Description : ${chalk.green(description)}`);
    })
    .catch((err) => console.log(chalk.red(err)));
}

// getWeather("ashdod");

export default getWeather;
