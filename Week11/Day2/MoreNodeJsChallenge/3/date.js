function nextHoliday () {
    let today = new Date()
    let holiday = new Date(today.getFullYear() + 1, 0, 1)
    const name = "New Year"
    const difference = holiday - today

    let day = Math.floor(difference / 1000 / 60 / 60 / 24) 
    let hour = Math.floor(difference / 1000 / 60 / 60 ) % 24
    let minute = Math.floor(difference / 1000 / 60) % 60
    let second = Math.floor(difference / 1000) % 60


    if (minute < 10) {
        minute = "0" + minute
    }
    if (second < 10) {
        second = "0" + second
    }

    console.log(`The next Holiday is in ${day} days and ${hour}:${minute}:${second}, its ${name}`);
}

module.exports = nextHoliday