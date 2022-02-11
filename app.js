const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/continents/Africa', (req, res) => {
    res.render('Africa')
});

app.get('/continents/Asia', (req, res) => {
    res.render('Asia')
});

app.get('/continents/Europe', (req, res) => {
    res.render('Europe')
});

app.get('/continents/South_America', (req, res) => {
    res.render('South_America')
});

app.get('/continents/North_America', (req, res) => {
    res.render('North_America')
});

app.get('/continents/Oceania', (req, res) => {
    res.render('Oceania')
});

app.get('/continents/Antarctica', (req, res) => {
    res.render('Antarctica')
});
app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});