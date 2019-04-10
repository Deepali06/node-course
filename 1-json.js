const fs = require('fs');

/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookjson = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookjson);


/*console.log(bookjson);

const parseData = JSON.parse(bookjson);
console.log(parseData.author);*/

const databuffer = fs.readFileSync('1-json.json');
console.log(databuffer.toString());
