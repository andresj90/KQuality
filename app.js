
/* DEPENDENCIES, libraries or modules for the project */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

/* create the application variable */
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));


app.listen(3000, 'localhost', (err) => {
    if(err) {
        return console.log(err)
    }
    
    console.log("Server On");
})

