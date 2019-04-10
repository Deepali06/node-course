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

/*const databuffer = fs.readFileSync('1-json.json');
const dataJSON = databuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);*/

const bufferdata = fs.readFileSync('1-json.json');
const dataJSON = bufferdata.toString();
const user = JSON.parse(dataJSON);
//console.log(user);

user.name = 'Deepali';
user.age = '27';

const userJSON = JSON.stringify(user);
//console.log(userJSON);
fs.writeFileSync('1-json.json', userJSON);

