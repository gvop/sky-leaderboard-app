var Programme   = require('../models/programme');

function programmeAdd(req, res){
  var programme = new Programme(req.body);
  programme.save(function(err, programme) {
    if (err) return res.status(500).send(err);
    res.status(201).send(programme)
  })
}

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