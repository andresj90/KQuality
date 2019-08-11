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
            console.log("true");
        } else {
            res.json({
                success: false,
                msg: 'System Role already exits in the system'
            });
            console.log("false");
        }
    }).catch((err) => {
        return console.log(err);
    });
}
