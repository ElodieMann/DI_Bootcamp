const quotes = [
  {
    id: 0,
    author: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
    like: 0,
  },
  {
    id: 1,
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    like: 0,
  },
  {
    id: 2,
    author: "Eleanor Roosevelt",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    like: 0,
  },
  {
    id: 3,
    author: "Franklin D. Roosevelt",
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    like: 0,
  },
  {
    id: 4,
    author: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    like: 0,
  },
  {
    id: 5,
    author: "Franklin D. Roosevelt",
    quote: "The only thing we have to fear is fear itself.",
    like: 0,
  },
  {
    id: 6,
    author: "Ralph Waldo Emerson",
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    like: 0,
  },
  {
    id: 7,
    author: "Martin Luther King Jr.",
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    like: 0,
  },
  {
    id: 8,
    author: "J.K. Rowling",
    quote: "It does not do to dwell on dreams and forget to live.",
    like: 0,
  },
  {
    id: 9,
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    like: 0,
  },
];

const section = document.querySelector("section");
const button = document.getElementById("generate");
const quoteInput = document.getElementById("quote");
const authorInput = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");
const charWithSpace = document.getElementById("charWithSpace");
const charWithoutSpace = document.getElementById("charWithoutSpace");
const words = document.getElementById("words");
const like = document.getElementById("like");
const number = document.querySelector("h1");
const inputAuthor = document.getElementById("authorOfQuotes");
const btnAuthor = document.getElementById("authorBtn");
const diplayQuotes = document.getElementById("displayQuotes");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
let idObj = quotes.length;
let arrUsed = [];
let counter = 0;
let quoteDisplay = 0;
let author = [];

button.addEventListener("click", generateQuote);
newQuoteBtn.addEventListener("click", createQuote);
charWithSpace.addEventListener("click", numbCharWithSpace);
charWithoutSpace.addEventListener("click", numbCharWithoutSpace);
words.addEventListener("click", numbWords);
like.addEventListener("click", addLike);
btnAuthor.addEventListener("click", displayQuotesByAuthor);
previousBtn.addEventListener("click", previousQuote);
nextBtn.addEventListener("click", nextQuote);

function generateQuote() {
  let random;
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (arrUsed.includes(random));

  arrUsed.push(random);
  random = Math.floor(Math.random() * quotes.length);

  section.innerHTML = `
      <p>${quotes[random].quote}</p>
      <p>${quotes[random].author}</p>
      `;

  console.log(arrUsed);

  charWithSpace.setAttribute("random-index", random);
  charWithoutSpace.setAttribute("random-index", random);
  words.setAttribute("random-index", random);
}

function createQuote(e) {
  e.preventDefault();
  let newQuote = quoteInput.value;
  let newAuthor = authorInput.value;

  let newobj = {
    id: idObj++,
    author: newAuthor,
    quote: newQuote,
    like: 0,
  };

  quotes.push(newobj);

  quoteInput.value = "";
  authorInput.value = "";

  console.log(quotes);
}

function numbCharWithSpace() {
  const currentQuote = charWithSpace.getAttribute("random-index");
  let contain = quotes[currentQuote].quote.length;
  number.textContent = contain;
}
function numbCharWithoutSpace() {
  const currentQuote = charWithoutSpace.getAttribute("random-index");
  let contain = quotes[currentQuote].quote.replaceAll(" ", "").length;
  number.textContent = contain;
}
function numbWords() {
  const currentQuote = charWithSpace.getAttribute("random-index");
  contain = quotes[currentQuote].quote.split(" ").length;
  number.textContent = contain;
}
function addLike() {
  const currentQuote = charWithSpace.getAttribute("random-index");
  counter++;
  quotes[currentQuote].like = counter;
  counter = 0;
  console.log(quotes);
}

function displayQuotesByAuthor(e) {
  e.preventDefault();
  console.log(inputAuthor.value);
  let value = inputAuthor.value;
   author = quotes.filter((quote) =>
    quote.author.toLowerCase().includes(value.toLowerCase())
  );
  console.log(author);

  //  const mapValues = author.map(quote =>

  //       `
  //      <h1>${quote.author}</h1>
  //      <h3>${quote.quote}</h3>

  //      `
  //  ).join("")

  //  diplayQuotes.innerHTML = mapValues

  if (author.length > 0) {
    quoteDisplay = 0;
    displayOneByOne(author);
  }

  inputAuthor.value = "";
}

function displayOneByOne(author) {
    const quote = author[quoteDisplay]
  diplayQuotes.innerHTML = `
         <h1>${quote.author}</h1>
         <h3>${quote.quote}</h3>
         
        `;
}

function previousQuote(e) {
    e.preventDefault();
    if (quoteDisplay > 0) {
        quoteDisplay--;
      displayOneByOne(author);
    }
  }
  
  function nextQuote(e) {
    e.preventDefault();
    if (quoteDisplay < author.length - 1) {
        quoteDisplay++;
      displayOneByOne(author);
    }
  }
  
  
