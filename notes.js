//console.log('notes.js');
const fs = require('fs');
const chalk = require('chalk');
let count = 0 ;
const getnotes = function(){
    return 'Yournotes..';
}

addnote = (title,body)=>{
   const notes = loadnotes();
   const duplicatenotes = notes.filter((note)=>{
      return note.title === title
   })
   if(duplicatenotes.length === 0){
    notes.push({
        title: title,
        body: body
    })
    savenotes(notes);
    console.log(chalk.green.inverse('New note added'));
   } else{
       console.log(chalk.red.inverse('Note title taken'));
   }
  
}


removenote = (title)=>{
    const readnotes = loadnotes();
  //  console.log(readnotes);
   const notesToKeep = readnotes.filter((readnote)=>{
       return readnote.title !== title;
   })
   if(readnotes.length > notesToKeep.length){
       console.log(chalk.green("Note deleted"));
       savenotes(notesToKeep);
   }else {
       console.log(chalk.red("no note found"));
   }

 }
 savenotes = (notes)=>{
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
  }
loadnotes = ()=>{
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
