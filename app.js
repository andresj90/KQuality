/*THIS FILE is the entry point for the server application, whenever the servers kicks off 
  this is the file where everything will be verified (dependencies, middleware and so on)
*/


/* DEPENDENCIES, libraries or modules for the project */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


/* create the application, app is an instance of express */
const app = express();


/* Middleware goes in here */ 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



/* STARTING ROUTE, MAIN ENTRY */
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));



/* PORT LISTENER */
app.listen(3000, 'localhost', (err) => {
    if(err) {
      return console.log(err)
    }   
    console.log("Server On");
})

