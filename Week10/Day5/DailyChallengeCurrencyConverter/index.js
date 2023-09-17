const initialMoney = document.getElementById("initialMoney");

const destinationMoney = document.getElementById("destinationMoney");
const initialAmount = document.getElementById("initialAmount");
const resultAmount = document.getElementById("resultAmount");
console.log(resultAmount);
const btnConvert = document.getElementById("btnConvert");
const switchBtn = document.getElementById('switchBtn')
let value;
let value2;
let convert;

initialMoney.addEventListener("change", selectedcurrencyFrom);
destinationMoney.addEventListener("change", selectedcurrencyTo);
btnConvert.addEventListener('click', change)
switchBtn.addEventListener('click', switchCurrency)


async function supportedCurrencies() {
  try {
    await fetch(
      "https://v6.exchangerate-api.com/v6/abe02b5f470a05fece267538/codes"
    )
      .then((res) => res.json())
      .then((data) => {
        value = data.supported_codes;
        addCurrent(value);
      });
  } catch (error) {
    console.error("Error fetching supported currencies:", error);
  }
}

async function current() {
  try {
    await fetch(
      `https://v6.exchangerate-api.com/v6/abe02b5f470a05fece267538/pair/${value}/${value2}`
    )
      .then((res) => res.json())
      .then((data) => {
        convert = data.conversion_rate;

        console.log(convert);
      });
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
}

function addCurrent(supportedCodes) {
  for (let i = 0; i < supportedCodes.length; i++) {
    const opt = document.createElement("option");
    opt.text = `${supportedCodes[i][0]} - ${supportedCodes[i][1]}`;
    initialMoney.add(opt, null);
    destinationMoney.add(opt.cloneNode(true), null);
  }
}

supportedCurrencies();

function selectedcurrencyFrom() {
  value = initialMoney.value.substring(0, 3);
}
function selectedcurrencyTo() {
  value2 = destinationMoney.value.substring(0, 3);
  current();
}

selectedcurrencyFrom();

function change() {
  let initialCount = initialAmount.value;
  console.log(typeof Number(initialCount));
  console.log(typeof convert);
  let total = Number(initialCount) * convert
  console.log(total);
  resultAmount.textContent = total.toString()

}


function switchCurrency () {

   let value3 = value
   value = value2
   value2 = value3

   const initialMoneyValue = initialMoney.value;
   initialMoney.value = destinationMoney.value;
   destinationMoney.value = initialMoneyValue;
   current()
   change()
}

