const PORT = 3000;
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

/*
  Middlewares
*/
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} - ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', `${log}\n`, (err) => {
    if(err) {
      console.log('Unable to append to server.log.');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs', {
//     title: 'Maintenance'
//   });
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home',
        headerText: 'Home page',
        welcomeMessage: "Welcome to my webpage!"
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About',
        headerText: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'Error handling request!'
    });
});

app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
});
