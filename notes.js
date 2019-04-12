//console.log('notes.js');
const fs = require('fs');
const chalk = require('chalk');
let count = 0 ;
const getnotes = function(){
    return 'Yournotes..';
}

const addnote = function(title,body){
   const notes = loadnotes();
   const duplicatenotes = notes.filter(function(note){
      return note.title === title
   })
   if(duplicatenotes.length === 0){
    notes.push({
        title: title,
        body: body
    })
    savenotes(notes);
    console.log('New note added');
   } else{
       console.log('Note title taken');
   }
  
}


const removenote = function(title){
    const readnotes = loadnotes();
  //  console.log(readnotes);
   const notesToKeep = readnotes.filter(function (readnote){
       return readnote.title !== title;
   })
   if(readnotes.length > notesToKeep.length){
       console.log(chalk.green("Note deleted"));
       savenotes(notesToKeep);
   }else {
       console.log(chalk.red("no note found"));
   }

 }
 const savenotes = function(notes){
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
  }
const loadnotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);

    } catch(e){
        return []
    }
    
}


module.exports = {
    getnotes: getnotes,
    addnote: addnote,
    removenote: removenote
};
