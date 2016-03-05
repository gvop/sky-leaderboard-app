var mongoose      = require("mongoose");
var Rating        = require('./rating');

var programmeSchema   = mongoose.Schema({
  programmeId: String,
  name:String,
  imagePath: String,
  rating: [Rating.schema],
  avarageRating: Number
});

module.exports = mongoose.model("Programme", programmeSchema);