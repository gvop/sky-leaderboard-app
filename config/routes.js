var express  = require('express');
var router   = express.Router();


var programmesController = require('../controllers/programmesController');
router.route('/api/programmes/')
  .post(programmesController.programmeAdd)
  .get(programmesController.programmesIndex)

router.route('/api/programmes/:id')
  .put(programmesController.addRating)
  
module.exports = router;

