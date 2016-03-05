var Programme   = require('../models/programme');

function programmeAdd(req, res){
  var data = req.body.data
  for(var i=0;i<req.body.data.length;i++){
    data[i].avarageRating = 0;
    data[i].ratingLength  = 0;
  }
  var i=0;
  for(i;i<data.length;i++){
    var programme = new Programme(data[i]);
    programme.save(function(err, programme) {
      if (err) return res.status(500).send(err);
    })
  };
};

function programmesIndex(req, res){
  Programme.find().sort({avarageRating : -1, ratingLength : -1  }).find(function(err, programmes){
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
    var length = (programme.rating.length + 1)
    programme.ratingLength = parseInt(length)
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



