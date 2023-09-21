const fs = require('fs');

fs.readFile('source.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    fs.writeFile('destination.txt', data, function (err) { 
        if (err){ 
            console.log(err);
            return
        }
        else{
            console.log('Write operation complete.');
        }
    });;
});