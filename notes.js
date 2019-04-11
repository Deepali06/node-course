//console.log('notes.js');
const fs = require('fs');

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
const savenotes = function(notes){
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
}

const removenote = function(title){
    const readnotes = loadnotes();
    console.log(readnotes);
    for(let i=0; i< readnotes.length; i++)
    {
    if (title == readnotes[i].title ) {
        console.log(readnotes[i].title);
        readnotes.splice(i);
        console.log('Note is deleted');
    }
}
console.log(readnotes);
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
