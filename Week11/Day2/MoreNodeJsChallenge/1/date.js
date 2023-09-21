function findTime () {
    let today = new Date()
    let firstDayOfYear = new Date(today.getFullYear() + 1, 0, 1)
    let difference = firstDayOfYear - today

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

    return `The 1st January is in ${day} days and ${hour}:${minute}:${second}`;
}

findTime()

module.exports = findTime