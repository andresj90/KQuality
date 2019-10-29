const keys = require('./keys');
const AzureAdOAuth2Strategy = require('passport-azure-ad-oauth2');
const jwt = require('jsonwebtoken');
const passport = require('passport');

passport.use(new AzureAdOAuth2Strategy({
        clientID: keys.azure.clientID,
        clientSecret: keys.azure.clientSecret,
        callbackURL: '/user/auth/redirect',
        resource: keys.azure.resource,
        tenant: keys.azure.tenant
    },
    function (accessToken, refresh_token, params, profile, done) {
        waadProfile = jwt.decode(params.id_token)
    
         console.log(waadProfile);

    }));