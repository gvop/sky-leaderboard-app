var Programme   = require('../models/programme');

function programmesAdd(req, res){
  var programme = new Programme(req.body);
  console.log(programme)
  programme.save(function(err, programme) {
    console.log("test")
    if (err) return res.status(500).send(err);
    res.status(201).send(programme)
  })
}


module.exports = { 
  programmesAdd: programmesAdd
}