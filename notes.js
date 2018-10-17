const fs = require('fs');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
    var notes = list();
    var noteObject = {
        title,
        body
    }

    var duplicateNotes = notes.filter((notes) => note.title === title)
    

    notes.push(noteObject);
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

var list = () => {
    console.log('list notes');
    try{
        var notesString = fs.readFileSync('notes.json',);
    }
    catch(error){
        if(error.code === 'ENOENT'){
            return [];
        }
    }
    return JSON.parse(notesString);
}

var removeNote = (title) => {
    console.log(`note: ${title} removed`);
    var noteString = fs.readFileSync('notes.json');
    var notes = JSON.parse(noteString);

    var index = array.indexOf()
}

var readNote = (title) => {
    console.log(`note: ${title} read`);
    var noteString = fs.readFileSync('notes.json');
    var notes = JSON.parse(noteString);

    var note = notes.find(note => note.title === title);

    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    list,
    removeNote,
    readNote
};