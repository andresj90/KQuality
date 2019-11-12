const keys = require('./keys');
const AzureAdOAuth2Strategy = require('passport-azure-ad-oauth2');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../controllers/user');

passport.use(new AzureAdOAuth2Strategy({
        clientID: keys.azure.clientID,
        clientSecret: keys.azure.clientSecret,
        callbackURL: 'http://localhost:3000/user/auth/azureadoauth2/redirect',
        resource: keys.azure.resource,
        tenant: keys.azure.tenant
    },
    async function (accessToken, refresh_token, params, profile, done) {

        console.log(done);
        console.log(params);

        waadProfile = jwt.decode(params.id_token);

        console.log('Before sending the request');
        let newUser = await User.addUserOauth(waadProfile);
        console.log('After the async await');

        if (newUser.userCreated) {
            console.log("Got in true"); 
            done(null, newUser);
        } else {
            console.log("Got in false");
            done(true, null);
        }

    }));