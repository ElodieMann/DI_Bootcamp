import fs from 'fs';

function readFile () {

    fs.readFile('./files/file-data.txt', 'utf-8', function (err, data) {
        if (err) {
            console.error(err)
            return
        }
        console.log(data);
    });
}

export default readFile