var localStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
    console.log('in Signup strategy');
    passport.use('signup', new localStrategy({
        passReqToCallback: true
    },
    function(req, username, password, done) {
        findOrCreateUser = function() {
            console.log('findOrCreate');
            User.findOne({'username':username}, function(err, user) {
                if(err) {
                    console.log('Error in SignUp: ' +err);
                    return done(err);
                }
                if(user) {
                    console.log('User already exists with username: ' +username);
                    return done(null, false, req.flash('message', 'User already exists'));
                }    else {
                    var newUser = new User();

                    newUser.username = username;
                    newUser.password = createHash(password);
                    newUser.email = req.param('email');
                    newUser.firstName = req.param('firstName');
                    newUser.lastName = req.param('lastName');

                    newUser.save(function(err) {
                        if(err) {
                            console.log('Error in saving user: ' +err);
                            throw err;
                        } else {
                            console.log('User registration successful');
                            return done(null, newUser);
                        }
                    });
                }
            });
        };

        process.nextTick(findOrCreateUser);
    }
));

    var createHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    }
}
