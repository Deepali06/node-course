//console.log('notes.js');
const fs = require('fs');

const getnotes = function(){
    return 'Yournotes..';
}

const addnote = function(title,body){
   const notes = loadnotes();
   console.log(notes);
}

const loadnotes = function(){
    try{
        const dataBuffer = fs.readFileSync(notes.json);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);

    } catch(e){
        return []
    }
    
}
module.exports = {
    getnotes: getnotes,
    addnote: addnote
};
