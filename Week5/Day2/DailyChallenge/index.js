let count = 0;
let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");
let btn = document.getElementById("lib-button");
let text = document.getElementById("story");
let shuffle = document.createElement("button");

shuffle.textContent = "SHUFFLE";
document.body.appendChild(shuffle);

shuffle.addEventListener("click", shuffleStory);
btn.addEventListener("click", (e) => makeAStory(e));

function makeAStory(e) {
  e.preventDefault();
  if (
    !noun.value ||
    !adjective.value ||
    !person.value ||
    !verb.value ||
    !place.value
  ) {
    text.textContent = "You misses something";
  } else
    text.textContent = `In a ${adjective.value} land, a brave ${person.value}, embarked on a daring quest. They explored the ${place.value}, facing challenges with a ${verb.value}. In the end, they found a ${noun.value}, becoming a hero! The end.`;
}

function shuffleStory() {
  if (
    !noun.value ||
    !adjective.value ||
    !person.value ||
    !verb.value ||
    !place.value
  ) {
    text.textContent = "You misses something";
  } else {
    if (count > 2) {
      alert("end of game");
      return;
    }

    let shuf = [
      `In an ancient ${place.value}, ${person.value}, an ${adjective.value} ${person.vamue}, ${verb.value} on a magical quest. They overcame obstacles and discovered a hidden secret that made them a hero. The end.`,
      `In the depths of ${place.value}, ${person.value}, a ${adjective.value} ${person.value}, ${verb.value} fearlessly. They faced the unknown and found a rare treasure, becoming a celebrated hero. The end.`,
      `In a distant ${place.value}, ${person.value}, a ${adjective.value} ${person.value}, embarked on an exciting quest. They ${verb.value} through challenges and found a hidden treasure that made them a hero. The end.`,
    ];

    text.textContent = shuf[count];
    count++;
  }
}
