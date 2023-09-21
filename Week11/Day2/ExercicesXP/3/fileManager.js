const fs = require("fs")

function readFile () {
    fs.readFile('helloworld.txt', 'utf-8', function (err, data) {
        if (err) {
            console.error(err)
            return
        }
        console.log(data);
    });
}

function writeFile (sentence) {
    fs.writeFile('byworld.txt', sentence, function (err) { 
        if (err){ 
            console.log(err);
        }
        else{
            console.log('Write operation complete.');
        }
    });
}

module.exports = { readFile, writeFile };