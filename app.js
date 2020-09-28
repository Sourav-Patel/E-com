const express = require('express');
const app = express();
const ejs = require('ejs');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) { 
    res.render('home');
 })

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port port!`));