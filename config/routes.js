var express  = require('express');
var router   = express.Router();

var programmesController         = require('../controllers/programmesController');

router.route('/api/programmes/')
  .post(programmesController.programmesAdd)

module.exports = router;