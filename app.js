/* 1st Program
const fs = require('fs');
fs.writeFileSync('notes.txt', 'This file was created by NodeJS');
fs.writeFileSync('notes.txt', 'My name is Deepali');
fs.appendFileSync('notes.txt',' I work at Wipro Digital as Senior Software Developer');*/

/* 2nd Program */

//const add = require('./utils.js');
const note = require('./notes.js');
const msg = note();
console.log(msg);
//const name = 'Deepali';
//const sum =  add(4,-2);
//console.log(sum);
