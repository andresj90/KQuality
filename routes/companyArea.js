/* require file from the controller*/
const companyArea = require('../controllers/companyArea');
const companyAreasRouter = require('express').Router();
const { check, validationResult } = require('express-validator');



/* Routes for the company area in the app */

companyAreasRouter.post('/create',(req, res) => {
    let area = {
        name: req.body.name,
        description: req.body.description,
        upperAreaID: req.body.upperAreaID
    }
      

    companyArea.addCompanyArea(area, res);
    
});

companyAreasRouter.get('/all', (req, res) => {
    companyArea.listCompanyAreas(res);
})

module.exports = companyAreasRouter;