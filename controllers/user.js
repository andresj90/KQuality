//get the model filter: 
const User = require('../models').User;

/* apply the businnes logic with the model */

module.exports.addUser = (newUser, res) => {
    User.create(newUser).then(() => {
        User.findOrCreate({
            where: {
                username: newUser.username
            }
        }).
        then(([user, wasCreated]) => {
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

    }).catch((err) => {
        res.json({
            success: false,
            msg: err
        })
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