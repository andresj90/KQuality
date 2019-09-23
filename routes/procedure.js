/* HERE we call our controller which connects to the database and will connect to the view here */
const Procedure = require('../controllers/procedure');
const procedureRouter = require('express').Router();


/* Routes for the systemroute in the app */

procedureRouter.post('/create', (req, res) => {
    let newProcedure = {
        name: req.body.name,
        description: req.body.description
    }
    console.log(newProcedure)
    Procedure.addProcedure(newProcedure, res);
});

procedureRouter.get('/all', (req, res) => {
    Procedure.getProcedures(res);
})

module.exports = procedureRouter;