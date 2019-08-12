/* HERE we call our controller which connects to the database and will connect to the view here */
const User = require('../controllers/user');
const userRouter = require('express').Router();


/* Routes for the systemroute in the app */

userRouter.post('/create', (req, res) => {
    
    let newUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        username:req.body.username,
        password:req.body.password,
        companyRoleID:req.body.companyRoleID,
        companyAreaID:req.body.companyAreaID,
        systemRoleID:req.body.systemRoleID
    }
    console.log(newUser);
    User.addUser(newUser, res);
});

userRouter.get('/all', (req, res) => {
    User.listUsers(res);
})

module.exports = userRouter;