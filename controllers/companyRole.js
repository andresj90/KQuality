//get the model filter: 
const companyRole = require('../models').CompanyRole;

/* apply the businnes logic with the model */

module.exports.addCompanyRole = (newRole, res) => {
    companyRole.findOrCreate({
        where: {
            name: newRole.name
        },
        defaults: {
            description: newRole.description,
            companyAreaID: newRole.companyAreaID
        }
        
    }).
    then(([role, wasCreated]) => {
        if (wasCreated) {
            res.json({
                success: true,
                msg: 'Company role has been added to the system'
            });
        } else {
            res.json({
                success: false,
                msg: 'Company role already exits in the system'
            });
        }
    }).catch(err => {
        return console.log(err);
    })
}

module.exports.listCompanyRoles = (res) => {
    companyRole.findAll().then(roles => {
        if (roles.length > 0) {
            res.json({
                success: true,
                elements: roles
            })
        } else {
            res.json({
                success: false,
                msg: 'There are not company roles added in the system'
            });
        }
    }).catch(err => {
        return console.log(err)
    })   
} 
