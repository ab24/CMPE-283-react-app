var Department = require('../models/department');


var findAll = (req,res,next) =>{
    Department.find().exec(function(err,departments){
        res.send(departments);
    })
}

exports.findAll = findAll;