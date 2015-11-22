var User = require('../models/user');

exports.postUsers = function(req, res) {
    var user = new User({
        //set username and password received from POST data
        username: req.body.username,
        password: req.body.password
    });

    //save user and check for errors
    user.save(function(err) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'User added'
        });
    });
};