var express  = require('express');
var router   = express.Router();
var multer   = require('multer');


var programmesController = require('../controllers/programmesController');
router.route('/api/programmes/')
  .post(programmesController.programmeAdd)
  .get(programmesController.programmesIndex)

router.route('/upload')
  .post(programmesController.documentUpload)

module.exports = router;

