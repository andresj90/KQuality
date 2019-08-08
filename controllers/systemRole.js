/*  Here we work on the business logic for the system role instance */
const SystemRole = require('../models').SystemRole;

module.exports.addSystemRole = (systemrole) => {
    SystemRole.findOrCreate({
        where: {
            name: systemrole.name
        }
    }).
    then(([systemrole, created]) => {
        return created
    }).catch((err) => {
        return console.log(err);
    });

}
