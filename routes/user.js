/* HERE we call our controller which connects to the database and will connect to the view here */
const User = require('../controllers/user');
const userRouter = require('express').Router();
const passport = require('passport');

/* Routes for the systemroute in the app */

userRouter.post('/create', (req, res) => {
    let newUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        gender: req.body.gender,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        companyRoleID: req.body.companyRoleID,
        systemRoleID: req.body.systemRoleID
    }
    console.log(newUser);
    User.addUser(newUser, res);
});

userRouter.get('/all', (req, res) => {
    User.listUsers(res);
});

/* updating data */
userRouter.put('/update', (req, res) => {
    let user = req.body;
    /*call method on controller */
    User.updateUser(user, res);
});

/* Login User in the system*/



/* USER REGISTRATION */
userRouter.get('/auth/azureadoauth2', passport.authenticate('azure_ad_oauth2', {
    scope: ['profile']
}));

userRouter.get('/auth/redirect', passport.authenticate('azure_ad_oauth2', {
    session: false
}), (req, res) => {
    res.send('account registered');
});

module.exports = userRouter;