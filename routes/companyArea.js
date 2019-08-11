/* require file from the controller*/
const companyArea = require('../controllers/companyArea');
const companyAreasRouter = require('express').Router();

/* Routes for the company area in the app */

companyAreasRouter.post('/create', (req, res) => {
    let newRole = {
        name: req.body.name
    }
    companyArea.addCompanyArea(newRole, res);
});

companyAreasRouter.get('/all', (req, res) => {
    companyArea.listCompanyAreas(res);
})

module.exports = companyAreasRouter;