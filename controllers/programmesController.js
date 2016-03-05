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


function addRating(req,res ){
  var score = parseInt(req.body.data)
  console.log(score)
  var data = {
    score     : parseInt(score),
    timeStamp : new Date()
  }

  Programme.findById(req.params.id,  function(err, programme) {
    programme.rating.push(data)
    programme.save(function(data){
      avarageRating(programme)
      res.status(200).json({message: "You've added a comment!"});
    });
  });
};

function avarageRating(rattingArray){
  var id = rattingArray._id 
  console.log(id)
  var i = 0;
  var score = 0;
  for(i;i<rattingArray.rating.length;i++){
    console.log(rattingArray.rating[i].score)
    score += rattingArray.rating[i].score
  }
  var avarage = score / rattingArray.rating.length
  updateAvarage(id,(Math.round(avarage)))
};

function updateAvarage(id,avarage){
  Programme.findById(id,  function(err, programme) {
    programme.avarageRating = avarage
    programme.save(function(data){
      console.log("Avarage added")
    });
  });
}


module.exports = { 
  programmesIndex : programmesIndex,
  programmeAdd    : programmeAdd,
  addRating       : addRating
}



