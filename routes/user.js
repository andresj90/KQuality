/* HERE we call our controller which connects to the database and will connect to the view here */
const User = require('../controllers/user');
const userRouter = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken'); 

/* Routes for the systemroute in the app */

userRouter.post('/create', (req, res) => {
    
    // console.log(newUser);
    // User.addUser(newUser, res);

    

    let userData = jwt.decode(req.body.token, {complete:true});

    // console.log(userData.payload); 
    User.addUser(userData.payload, res);
     
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
userRouter.get('/auth/azureadoauth2', passport.authenticate('azure_ad_oauth2'
));

userRouter.get('/auth/azureadoauth2/redirect', passport.authenticate('azure_ad_oauth2', 
{failureRedirect: '/'} ), (req, res) => {
    res.redirect('/');
});

module.exports = userRouter;