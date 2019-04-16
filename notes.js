//console.log('notes.js');
const fs = require('fs');
const chalk = require('chalk');
let count = 0 ;


addnote = (title,body)=>{
   const notes = loadnotes();
  // const duplicatenotes = notes.filter((note) =>  note.title === title)
   const duplicatenote = notes.find((note) => note.title === title)
       
   
   
   if(!duplicatenote){
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

 listnotes = () =>{
   const notes = loadnotes();
   console.log(chalk.inverse("Your notes"));
   notes.forEach((note)=>{
     console.log(note.title);
   })
 }
 readnote = (title) => {
   const notes = loadnotes();
   const notefound = notes.find((note)=> note.title === title);
   if(notefound){
       console.log(chalk.green("Note found"));
       console.log(chalk.green(notefound.title));
       console.log(notefound.body);

   } else {
       console.log(chalk.red("Note not found"));
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
    addnote: addnote,
    removenote: removenote,
    listnotes: listnotes,
    readnote: readnote
};
