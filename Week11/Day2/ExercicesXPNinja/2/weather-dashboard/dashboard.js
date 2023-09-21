import readline from "readline";
import getWeather from './weather.js'

let rl = readline.createInterface(
    process.stdin, process.stdout);

    function askCity () {
        rl.question('What is your city? ', (city) => {
            console.log(getWeather(city));
            rl.close();

        });
    }
    
    export default askCity