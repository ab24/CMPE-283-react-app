
var virtualMachine=require('../models/virtualMachine');

var saveVirtualMachine= function(req,res) {
    console.log('in departments POST- save virtual machine');
    var userName = req.body.userName;
    var image = req.body.image;
    var createdDate = Date.now;
    var terminationDate= req.body.terminationDate;
    var departmentName=req.body.departmentName;
    var prebuiltApp=req.body.preBuiltApp;
    var isActive=false;
    var flavour=req.body.flavour;
    var memory;
    var cpu;
    if(flavour == "tiny"){
        memory="512";
        cpu="1";
    }else if(flavour == "small"){
        memory="2048";
        cpu="1";
    }else{
        memory="4096";
        cpu="2";
    }
    virtualMachine = new virtualMachine({
        departmentName : departmentName,
        userName: userName,
        image: image,
        createdDate: createdDate,
        terminationDate: terminationDate,
        isActive:isActive,
        preBuiltApp: prebuiltApp,
        memory: memory,
        cpu: cpu
    });

    virtualMachine.save(function(err){
        if(err){
            console.log(err);
            res.send(err);
        }
            res.Jsonn({
                message: 'virtual machine added'
            });

    });
}

exports.saveVirtualMachine=saveVirtualMachine;