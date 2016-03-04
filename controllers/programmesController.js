var Programme   = require('../models/programme');
var multer      = require('multer');

function programmeAdd(req, res){
  var data = req.body.data
  console.log(req.body.data)
  var i=0;
  for(i;i<data.length;i++){
    var programme = new Programme(data[i]);
    programme.save(function(err, programme) {
      if (err) return res.status(500).send(err);
    })
  };
};

function programmesIndex(req, res){
  Programme.find({}, function(err, programmes){
    if (err) return res.render("error", { message: "Something went wrong. " + err });
    res.json({ programmes: programmes });
  });
}


module.exports = { 
  programmesIndex: programmesIndex,
  programmeAdd: programmeAdd
}