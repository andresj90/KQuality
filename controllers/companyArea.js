//get the model filter: 
const companyArea = require('../models').CompanyArea;

/* apply the businnes logic with the model */

module.exports.addCompanyArea = (newCompany, res) => {
    companyArea.findOrCreate({
        where: {
            name: newCompany.name
        }
    }).
    then(([area, wasCreated]) => {
        if (wasCreated) {
            res.json({
                success: true,
                msg: 'Company area has been added to the system'
            });
        } else {
            res.json({
                success: false,
                msg: 'Company area already exits in the system'
            });
        }
    }).catch(err => {
        return console.log(err);
    })
}

module.exports.listCompanyAreas = (res) => {
    companyArea.findAll().then(areas => {
        if (areas.length > 0) {
            res.json({
                success: true,
                systemroles: [roles]
            })
        } else {
            res.json({
                success: false,
                msg: 'There are not users added in the system'
            });
        }
    }).catch(err => {
        return console.log(err)
    })   
} 
