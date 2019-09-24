//get the model filter: 
const User = require('../models').User;

/* apply the businnes logic with the model */

module.exports.addUser = (newUser, res) => {
   
        User.findOrCreate({
            where: {
                email: newUser.email,
                username: newUser.username
            },
            defaults:{
                name: newUser.name,
                lastname: newUser.lastname,
                gender: newUser.gender,
                password:newUser.password,
                companyRoleID:newUser.companyRoleID,
                systemRoleID:newUser.systemRoleID
            }
        }).
        then(([user, wasCreated]) => {
            console.log(wasCreated);

            if (wasCreated) {
                res.json({
                    success: true,
                    msg: 'New user has been added to the system'
                });
            } else {
                res.json({
                    success: false,
                    msg: 'The username already exits in the system'
                });
            }
        }).catch(err => {
            res.json({
                success: false,
                msg: err
            });
        });

}

module.exports.listUsers = (res) => {
    User.findAll().then(users => {
        if (users.length > 0) {
            res.json({
                success: true,
                users: users
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


module.exports.updateUser = (user, res) => {
    /* gets user and updates the values send through form */

    User.upsert(user, {
        validate: true
    }).then(() => {
        if (validate && !user) {
            res.json({
                msg: 'User Updated',
                success: validate
            });
        } else {
            res.json({
                msg: 'Could not update user, validate fields',
                success: validate
            });
        }
    }).catch(err => {

    });

}