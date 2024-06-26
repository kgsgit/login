const express = require ("express");
const app = express();
const home = require('./login/routes/home');

app.set('views', './login/views');
app.set('view engine', 'ejs');


app.use('/', home);

module.exports = app;