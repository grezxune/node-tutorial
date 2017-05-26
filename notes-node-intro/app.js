console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

var user = os.userInfo();
var result = notes.addNote();
var addResult = notes.add(5, 12);
// console.log(addResult);

// console.log(_.isString(true));
// console.log(_.isString('Tommy'));
var filteredArray = _.uniq([2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 'Tommy', 'tommy', 'Tommy']);
console.log(filteredArray);
// Original Line
// fs.appendFile('greetings.txt', 'Hello world!\n');

// Option one to fix warning for Node V7+
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}\n`, function(err) {
//   if(err) {
//     console.log('Unable to write to file');
//   }
// });

// Option two to fix warning for Node V7+
// fs.appendFileSync('greetings.txt', 'Hello world!\n');
