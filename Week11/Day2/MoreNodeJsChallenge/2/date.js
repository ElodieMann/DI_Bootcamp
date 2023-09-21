function minutesLife(date) {
  const birthdayDate = new Date(date);
  const today = new Date();
  let difference = today - birthdayDate;
  let minutes = Math.floor(difference / 1000 / 60) ;
  return `You have lives ${minutes} minutes in your life`;
}

module.exports = minutesLife