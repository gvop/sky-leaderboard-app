var mongoose      = require("mongoose")

var ratingSchema    = mongoose.Schema({
  comment   : { type: Number, max: 5 },
  timeStamp : Date
})

module.exports = mongoose.model("Rating", ratingSchema)