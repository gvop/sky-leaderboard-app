var mongoose      = require("mongoose");
var Rating        = require('./rating');

var programmeSchema   = mongoose.Schema({
  programmeId   : String,
  name          : String,
  imagePath     : String,
  Rating        : [Rating.schema],
  averageScore  : Number
});

module.exports = mongoose.model("Programme", programmeSchema);