/* require file from the controller*/
const companyRole = require('../controllers/companyRole');
const companyRoleRouter = require('express').Router();

/* Routes for the company area in the app */

companyRoleRouter.post('/create', (req, res) => {
    let newRole = {
        name: req.body.name
    }
    companyRole.addCompanyRole(newRole, res);
});

companyRoleRouter.get('/all', (req, res) => {
    companyRole.listCompanyRoles(res);
})

module.exports = companyRoleRouter;