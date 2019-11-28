//get the model filter: 
const User = require('../models').User;

/* apply the businnes logic with the model */

module.exports.addUser = (user, res) => {
  
    console.log(user); 

    let username = user.upn.split("@");
    User.findOrCreate({
            where: {
                socialLogID: user.aud
            },
            defaults: {
                name: user.given_name,
                lastname: user.family_name,
                gender: null,
                email: user.upn,
                username: username[0],
                password: null,
                companyRoleID: 1, 
                systemRoleID:1
            }
        }).
        then(([user, wasCreated]) => {
            if (wasCreated) {
                res.json({
                    success: true,
                    msg: 'New user has been added to the system'
                });
            } else if(!wasCreated && user) {
                res.json({
                    success: true,
                    msg: 'Usuario Logged in'
                });
            } else {
                res.json({
                    success: false,
                    msg: 'Unable to log in'
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


/* User Login */

module.exports.addUserOauth = (user) => {

    return new Promise((resolve, reject) => {
        let username = user.upn.split("@");

        User.findOrCreate({
            where: {
                socialLogID: user.aud
            },
            defaults: {
                name: user.given_name,
                lastname: user.family_name,
                gender: null,
                email: user.upn,
                username: username[0],
                password: null,
                socialLogID: user.appid
            }
        }).then(([userFound, wasCreated]) => {
            if (userFound || wasCreated) {
                let newUser = {
                    user: userFound,
                    userCreated: true
                }
                resolve(newUser)
            } else {
                resolve(false)
            }
        }).catch(err => {
            reject(err);
        });

    });
}