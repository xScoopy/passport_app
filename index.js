//Express setup
const express = require('express');
const app = express();

app.use(express.static(__dirname));

const bodyParser = require('body-parser');
const expressSession = require('express-session')({
    secret: process.env.SECRET, 
    resave: false,
    saveUnitialized: false
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
app.use(expressSession)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ' + port));