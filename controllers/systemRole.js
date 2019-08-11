/*  Here we work on the business logic for the system role instance */
const SystemRole = require('../models').SystemRole;


module.exports.addSystemRole = (systemrole, res) => {
    SystemRole.findOrCreate({
        where: {
            name: systemrole.name
        }
    }).
    then(([newRole, created]) => {
        if (created) {
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
    }).catch((err) => {
        return console.log(err);
    });
}

module.exports.getSystemRoles = (res) => {
    SystemRole.findAll().then(roles => {
        if (roles.length > 0) {
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
