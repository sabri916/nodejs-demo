console.log("Starting app...");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
console.log('args from yarg:', argv);

var title = argv.title;
var body = argv.body;

if(command === 'list'){
    console.log('Listing all notes');
    notes.list();
}
else if(command === 'add') { 
    console.log(`adding new note: ${title}`);
    notes.addNote(title, body);
}
else if(command === 'read'){
    console.log('reading note');
    notes.readNote(title);
}
else if(command === 'remove'){
    console.log('removing note');
    notes.removeNote(title);
}
else {
    console.log('Command not recognised');
}