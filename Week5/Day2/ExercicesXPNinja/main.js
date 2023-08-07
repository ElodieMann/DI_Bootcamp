let totalTip = document.getElementById("totalTip");
totalTip.style.display = "none";


function calculateTip() {
    let billAmount = document.getElementById("billamt");
    console.log(billAmount);
    
    let valueBill = billAmount.value;
    console.log(valueBill);
    let serviceQuality = document.getElementById("serviceQual");
    let quality = serviceQuality.value;
    console.log(typeof quality);
    
    let numberOfPeople = document.getElementById("peopleamt");
    let people = numberOfPeople.value;
    console.log(people);
let each = document.getElementById("each");

let tip = document.getElementById("tip");
  if (Number(quality) === 0 || !valueBill.length) {
   return alert("please enter all values");
  }
  if (!people.length || people.length < 1) {
    people = 1;
    
    each.style.display = "none";
  }

  let total = (valueBill * quality) / people;
  total = total.toFixed(2);

  totalTip.style.display = "block";
  tip.textContent = total;
}



