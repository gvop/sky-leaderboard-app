var Programme   = require('../models/programme');
var Convert     = require('../controllers/convertController');
var multer      = require('multer');

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

function documentUpload(req, res){
  var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/uploads/');
    },
    filename: function (req, file, callback) {
      callback(null, "1j6dfG92nh6.xml");
    }
  });
  var upload = multer({ storage : storage}).single('document');
  upload(req,res,function(err) {
      if(err) {
          return res.end("Error uploading file.");
      }
      programmeAdd();
      Convert.convert();
      res.end("File is uploaded");
  });
}

module.exports = { 
  programmesIndex: programmesIndex,
  programmeAdd: programmeAdd,
  documentUpload: documentUpload
}