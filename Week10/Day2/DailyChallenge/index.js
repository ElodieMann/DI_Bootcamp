//1-
function makeAllCaps(arr) {
    let requests = arr.map((str) => {
      return new Promise((resolve, reject) => {
        if (typeof str === "string") {
          resolve(str.toUpperCase());
        } else {
          reject("invalid");
        }
      });
    });
    return Promise.all(requests);
  }
  
  let test = ["hey", "how", "are", "you", "today"];
  makeAllCaps(test)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  
  function sortWords(arr) {
    return new Promise((resolve, reject) => {
      if (arr.length > 4) {
        resolve(arr.sort());
      } else {
        reject("The length of your Array is under than 5");
      }
    });
  }
  
  sortWords(test)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  
  //2-
  const morse = `{
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      "a": ".-",
      "b": "-...",
      "c": "-.-.",
      "d": "-..",
      "e": ".",
      "f": "..-.",
      "g": "--.",
      "h": "....",
      "i": "..",
      "j": ".---",
      "k": "-.-",
      "l": ".-..",
      "m": "--",
      "n": "-.",
      "o": "---",
      "p": ".--.",
      "q": "--.-",
      "r": ".-.",
      "s": "...",
      "t": "-",
      "u": "..-",
      "v": "...-",
      "w": ".--",
      "x": "-..-",
      "y": "-.--",
      "z": "--..",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "!": "-.-.--",
      "-": "-....-",
      "/": "-..-.",
      "@": ".--.-.",
      "(": "-.--.",
      ")": "-.--.-"
    }`;
  
  function toJs(obj) {
    return new Promise((resolve, reject) => {
      const parse = JSON.parse(obj);
      if (Object.keys(parse).length === 0) {
        reject("error");
      } else {
        resolve(parse);
      }
    });
  }
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      let keyMorse = Object.keys(morseJS);
      let user = prompt("write a word or a sentence");
      let arrUser = user.split("");
  
      let sentence = [];
      for (let i = 0; i < arrUser.length; i++) {
        if (keyMorse.includes(arrUser[i])) {
          sentence.push(morseJS[arrUser[i]]);
        }
      }
      resolve(sentence);
    });
  }
  
  function joinWords(morseTranslation) {
    let message = morseTranslation;
    message.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = element;
      document.body.appendChild(div);
    });
  }
  
  toJs(morse)
    .then((morseJS) => toMorse(morseJS))
    .then((sentence) => joinWords(sentence))
    .catch((error) => console.log(error));