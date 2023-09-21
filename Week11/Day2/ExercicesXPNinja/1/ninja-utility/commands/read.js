import fs from 'fs'

function read () {

    fs.readFile('folder.txt', 'utf-8', function (err, data) {
        if (err) {
            console.error(err)
            return
        }
        console.log(data);
    });
}

export default read
