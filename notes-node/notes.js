console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = (callback) => {
  fs.readFile('notes-data.json', 'utf8', (err, data) => {
    var notes = [];
    if (data) {
      notes = JSON.parse(data);
    }

    callback(notes);
  });
};

var saveNotes = (notes, callback) => {
  fs.writeFile('notes-data.json', JSON.stringify(notes), (err) => {
    if (err) {
      throw err;
    } else {
      callback(true);
    }
  });
};

var addNote = (title, body, callback) => {
  fetchNotes((notes) => {
    var note = {
      title: title,
      body: body
    };

    var duplicateNotes = notes.filter((note) => {
      return note.title === title;
    });

    if (duplicateNotes.length <= 0) {
      notes.push(note);
      saveNotes(notes, (returnVal) => {
        if(returnVal === true) {
          callback(note);
        }
      });
    } else {
      callback('Cannot add duplicate note');
    }
  });
};

var getAll = (callback) => {
  fetchNotes((notes) => {
    callback(notes);
  });
};

var getNote = (title, callback) => {
  fetchNotes((notes) => {
    var noteToReturn = notes.filter((note) => {
      return note.title === title;
    });

    if (noteToReturn.length === 1) {
      callback(noteToReturn);
    } else if (noteToReturn.length === 0) {
      callback('Note not found');
    } else {
      callback('This is a state of bad data - duplicate titles');
    }
  });
}

var removeNote = (title, callback) => {
  fetchNotes((notes) => {
    var noteToReturn = notes.filter((note) => {
      return note.title == title;
    });

    if (noteToReturn.length === 1) {
      notes.pop(noteToReturn);
      saveNotes(notes, (returnVal) => {
        if(returnVal === true) {
          callback(noteToReturn[0]);
        }
      });
    } else if (noteToReturn.length === 0) {
      callback('Note not found');
    } else {
      callback('This is a state of bad data - duplicate titles');
    }
  });
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote
};
