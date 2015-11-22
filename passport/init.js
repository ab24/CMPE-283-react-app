var login = require('./login');
var signup = require('./signup');
var user = require('../models/user');

module.exports = function(passport) {
    //passport needs to serialize & deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');
        console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        user.findById(id, function(err, user) {
            console.log('deserializing user: ', user);
            done(err, user);
        });
    });

    //setup password strategies for login & signup/registration
    login(passport);
    signup(passport);
    console.log('setting up passport strategies');
};
