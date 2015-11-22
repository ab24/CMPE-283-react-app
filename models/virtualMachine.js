var mongoose = require('mongoose');

var vmSchema= new mongoose.Schema({
    userName: String,
    image: String,
    createdDate: Date,
    terminationDate: Date,
    departmentName: String,
    isActive:Boolean,
    preBuiltApp: String,
    memory: String,
    cpu: String

})

module.exports=virtualMachines=mongoose.model('virtualMachine',vmSchema);
