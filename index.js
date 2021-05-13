//Express setup
const express = require('express');
const app = express();

app.use(express);

const bodyParser = require('body-parser');
const expressSession = require('express-session')({
    secret: 'secret', 
    resave: false,
    saveUnitialized: false
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
app.use(expressSession)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ' + port));