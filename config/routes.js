var express  = require('express');
var router   = express.Router();
var multer   = require('multer')
var fs       = require('fs');

var upload   = multer({
  dest:'../public/uploads/',
  limits: {fileSize: 1000000, files:1},
})

var programmesController = require('../controllers/programmesController');
router.route('/api/programmes/')
  .post(programmesController.programmeAdd)
  .get(programmesController.programmesIndex)

router.post('/upload', upload.single('image'), function (req, res) {
    var tmp_path = req.file.path;
    var target_path = 'public/uploads/' + req.file.originalname;
    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() { console.log("Uploaded") });
})

module.exports = router;

