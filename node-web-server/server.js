const PORT = 3000;
const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Tommy',
        likes: [
            'Pool',
            'Programming',
            `Makin' Moneh!`
        ]
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page',
        year: new Date().getFullYear()
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
