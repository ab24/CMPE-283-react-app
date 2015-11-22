
var Glance = require("openclient").getAPI('openstack', 'image', '1.0');
var Stubs = require("../stubs/stubs");

var client = new Glance({
    url: 'http://localhost:5000/v2.0/',
    debug: true
}).authenticate({
    username: 'admin',
    password: '058b9a27e4304b56',
    project: 'admin',
    async: false
});

var findAllImages = (req,res,next) =>{
    var usingFixures = true;
    if(usingFixures == true){
        Stubs.getAllImages(function(err,images) {
            var toReturn = [];
            images.map((image, index)=> {
                var temp = {
                    uri: image.uri,
                    name: image.name,
                    disk_format: image.disk_format,
                    size: image.size,
                    is_public: image.is_public,
                    min_ram: image.min_ram,
                    min_disk: image.min_disk
                }
                toReturn.push(temp)
            });
            res.send(toReturn);
        })
    }else{
        client.images.all({async:false},function(err,images){
            var toReturn=[];
            images.map((image,index)=>{
                var temp = {
                    uri:image.uri,
                    name:image.name,
                    disk_format:image.disk_format,
                    size:image.size,
                    is_public:image.is_public,
                    min_ram:image.min_ram,
                    min_disk:image.min_disk
                }
                toReturn.push(temp)
            });
            res.send(toReturn);
        })
    }
}

exports.findAllImages = findAllImages;