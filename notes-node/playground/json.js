// var obj = {
//   name: 'Tommy'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);

// var personString = '{"name": "Tommy", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof(person));
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFile('note.json', originalNoteString, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('The file has been saved!');
    var noteString = fs.readFile('note.json', 'utf8', (err, data) => {
      if (err) {
        throw err;
      } else {
        var note = JSON.parse(data);
        console.log(note);
        console.log('type of note', typeof(note));
        console.log('title', note.title);
        console.log('body', note.body);
      }
    });
  }
});
