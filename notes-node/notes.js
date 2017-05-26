console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  fs.readFile('notes-data.json', 'utf8', (err, data) => {
    var notes = [];
    if (data) {
      notes = JSON.parse(data);
    }

    var note = {
      title: title,
      body: body
    };

    var duplicateNotes = notes.filter((note) => {
      return note.title === title;
    });

    if (duplicateNotes.length <= 0) {
      notes.push(note);

      fs.writeFile('notes-data.json', JSON.stringify(notes), (err) => {
        if (err) {
          throw err;
        } else {
          console.log('Added note!');
        }
      });
    } else {
      console.log('Cannot add duplicate note');
    }
  });
};

var getAll = (callback) => {
  fs.readFile('notes-data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      var notes = JSON.parse(data);
      callback(notes);
    }
  });
};

var getNote = (title) => {
  fs.readFile('notes-data.json', 'utf8', (err, data) => {
    var notes = [];
    if (data) {
      notes = JSON.parse(data);
    }

    var noteToReturn = notes.filter((note) => {
      return note.title == title;
    });

    if (noteToReturn.length === 1) {
      console.log(noteToReturn);
    } else if (noteToReturn.length === 0) {
      console.log('Note not found');
    } else {
      console.log('This is a state of bad data - duplicate titles');
    }
  });
}

var removeNote = (title) => {
  fs.readFile('notes-data.json', 'utf8', (err, data) => {
    var notes = [];
    if (data) {
      notes = JSON.parse(data);
    }

    var noteToReturn = notes.filter((note) => {
      return note.title == title;
    });

    if (noteToReturn.length === 1) {
      notes.pop(noteToReturn);

      fs.writeFile('notes-data.json', notes, (err) => {
        if (err) {
          throw err;
        } else {
          console.log('Removed note!');
        }
      });
    } else if (noteToReturn.length === 0) {
      console.log('Note not found');
    } else {
      console.log('This is a state of bad data - duplicate titles');
    }
  });
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote
};
