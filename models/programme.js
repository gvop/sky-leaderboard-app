var mongoose      = require("mongoose");

var programmeSchema   = mongoose.Schema({
  programmeId: String,
  name:String,
  imagePath: String
});

module.exports = mongoose.model("Programme", programmeSchema);