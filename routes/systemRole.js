/* HERE we call our controller which connects to the database and will connect to the view here */
const SystemRole = require('../controllers/systemRole');
const systemRoleRouter = require('express').Router();

/* Routes for the systemroute in the app */

systemRoleRouter.post('/create', (req, res) => {
    
    let newRole = {
        name: req.body.name
    }

    if (SystemRole.addSystemRole(newRole)) {
        res.json({
            success: true,
            msg: 'System Role has been added to the system'
        });
    } else {
        res.json({
            success: false,
            msg: 'System Role already exits in the system'
        });
    }
});

module.exports = systemRoleRouter;