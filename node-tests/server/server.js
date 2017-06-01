const port = 3000;

const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
      error: 'Page not found',
      name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Tommy',
        age: 25
    }, {
        name: 'Jeanna',
        age: 24
    }, {
        name: 'Riley',
        age: 25
    }]);
});

app.listen(port);

module.exports.app = app;
