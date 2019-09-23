/*  Here we work on the business logic for the system role instance */
const Procedure = require('../models').Procedure;


module.exports.addProcedure = (procedure, res) => {
    Procedure.findOrCreate({
        where: {
            name: procedure.name
        //      {
        //         [Op.like]: systemrole.name + '%'
        //     }
        // },
        },
        defaults: {
            type: procedure.type,
            parentProcedureID: procedure.parentProcedureID
        }
    }).
    then(([newProcedure, created]) => {
        if (created) {
            res.json({
                success: true,
                msg: 'Procedure has been added to the system'
            });
        } else {
            res.json({
                success: false,
                msg: 'Procedure already exits in the system'
            });
        }
    }).catch((err) => {
        return console.log(err);
    });
}

module.exports.getProcedures = (res) => {
    Procedure.findAll().then(procedures => {
        if (procedures.length > 0) {
            res.json({
                success: true,
                elements: procedures
            })
        } else {
            res.json({
                success: false,
                msg: 'There are not procedures added in the system'
            });
        }
    }).catch(err => {
        return console.log(err)
    })
}
