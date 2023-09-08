function formatDate(date) {
  let data = [];
  let year = date.getFullYear().toString();
  data.push(year);

  let month = (date.getMonth() + 1).toString();
  data.push(month);

  let day = date.getDate().toString();
  data.push(day);

  let hours = date.getHours().toString();
  data.push(hours);

  let minutes = date.getMinutes().toString();
  data.push(minutes);

  let seconds = date.getSeconds().toString();
  data.push(seconds);

  console.log(data);

  for (let i = 0; i < data.length; i++) {
    if (data[i].length === 1) {
      data[i] = "0" + data[i];
    }
  }

  return data.join("");
}

console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0)));
console.log(formatDate(new Date(2019, 11, 31, 23, 59, 59)));
console.log(formatDate(new Date(2020, 6, 4)));
