var mongoose      = require("mongoose");

var programmeSchema   = mongoose.Schema({
  name:String,
  imagePath: String
});

module.exports = mongoose.model("Programme", programmeSchema);