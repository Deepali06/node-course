/* 1st Program */
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
//console.log(process.argv);
// Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list 


// Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
    title: {
        describe: 'Note Title',
        demandOption: true,
        type: 'string'

    },
    body: {
        describe: 'Note Body',
        demandOption: true,
        type: 'string'
    }
},
    handler: function(argv){
        console.log('Title: ' + argv.title + ' Body: ' + argv.body);
    }
})

// Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
    }
})

// Create List command

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function(){
        console.log('Listing a note');
    }
})

// Create a Read Command

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function(){
        console.log('Reading a note');
    }
})
yargs.parse();
//console.log(yargs.argv);
