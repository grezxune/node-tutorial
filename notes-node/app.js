console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
console.log('Command: ', command);
// console.log('Process', process.argv);
// console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body, (note) => {
    console.log('Note created');
    console.log('---');
    console.log('title:', note.title);
    console.log('body:', note.body);
  });
} else if (command === 'list') {
  notes.getAll((notes) => {
    console.log(notes);
  });
} else if (command === 'read') {
  notes.getNote(argv.title, (message) => {
    console.log(message)
  });
} else if (command === 'remove') {
  notes.removeNote(argv.title, (note) => {
    if(note.title && note.body) {
      console.log('Note removed');
      console.log('---');
      console.log('title:', note.title);
      console.log('body:', note.body);
    } else {
      console.log(note);
    }
  });
} else {
  console.log('Command not recognized');
}
