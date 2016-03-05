var mongoose      = require("mongoose")

var ratingSchema    = mongoose.Schema({
  score   : { type: Number, max: 5 },
  timeStamp : Date
})

module.exports = mongoose.model("Rating", ratingSchema)