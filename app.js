/* 1st Program */
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
//console.log(process.argv);
// Customize yargs version
yargs.version('1.1.0');
console.log(yargs.argv);


// Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note'
})
// add, remove, read, list 
