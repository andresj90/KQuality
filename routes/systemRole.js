/* HERE we call our controller which connects to the database and will connect to the view here */
const SystemRole = require('../controllers/systemRole');
const systemRoleRouter = require('express').Router();


/* Routes for the systemroute in the app */

systemRoleRouter.post('/create', (req, res) => {
    let newArea = {
        name: req.body.name
    }
    SystemRole.addSystemRole(newArea, res);
});

systemRoleRouter.get('/all', (req, res) => {
    // SystemRole.listCompanyAreas(res);
})

module.exports = systemRoleRouter;