/*THIS FILE is the entry point for the server application, whenever the servers kicks off 
  this is the file where everything will be verified (dependencies, middleware and so on)
*/


/* DEPENDENCIES, libraries or modules for the project */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const models = require('./models');
const cosr = require('cors');
const multer = require('multer');
const path = require('path');


/* routes required */

const systemRoleRoutes = require('./routes/systemRole');
const companyAreaRoutes = require('./routes/companyArea');
const companyRoleRoutes = require('./routes/companyRole');
const userRoutes = require('./routes/user');
const documentRoutes = require('./routes/document');


/* create the application, app is an instance of express */
const app = express();


/* Middleware goes in here */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cosr());



/* Middleware for applicationroutes */
app.use('/systemrole', systemRoleRoutes);
app.use('/area', companyAreaRoutes);
app.use('/role', companyRoleRoutes);
app.use('/user', userRoutes);
app.use('/document', documentRoutes);

/* verify database connection */
models.sequelize.sync().then(() => {
  console.log("Connection to the database stablished");
}).catch(err => {
  return console.log("Connection could not be stablished " + err);
});

/* STARTING ROUTE, MAIN ENTRY */
app.get('/', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
  }));


/* PORT LISTENER */
app.listen(3000, 'localhost', (err) => {
  if (err) {
    return console.log(err)
  }
  console.log("Server On");
})
