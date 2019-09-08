//get the model filter: 
const companyArea = require('../models').CompanyArea;
const Sequelize = require('sequelize'); 

/* apply the businnes logic with the model */

module.exports.addCompanyArea = (area, res) => {
    console.log(typeof area.name);
    companyArea.findOrCreate({
        where: {
            name: area.name
            
        //    name: {
        //         [Sequelize.Op.like]: 'HHRR'
        //     }
        
        },

            defaults: {
                description: area.description
            }
        
    }).
    then(([area, wasCreated]) => {
        console.log(wasCreated + '     '   + area);
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
                companyareas: areas
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
