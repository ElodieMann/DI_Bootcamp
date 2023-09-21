const nextHoliday = require("./date");
const holidays = require("date-holidays");
const hd = new holidays("IL");
const holiday = hd.getHolidays();

function nextHoliday2() {
  const today = new Date();
  const listDate = holiday.filter((date) => new Date(date.date) > today);
  const next = listDate[0];
  const difference = new Date(next.date) - today;

  let day = Math.floor(difference / 1000 / 60 / 60 / 24);
  let hour = Math.floor(difference / 1000 / 60 / 60) % 24;
  let minute = Math.floor(difference / 1000 / 60) % 60;
  let second = Math.floor(difference / 1000) % 60;

  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  console.log(
    `The next Holiday is in ${day} days and ${hour}:${minute}:${second}, its ${next.name}`
  );
}
nextHoliday2();
const result = nextHoliday();
console.log(result);
