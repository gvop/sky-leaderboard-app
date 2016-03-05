var mongoose        = require("mongoose");
var databaseUrl     = process.env.MONGOLAB_URI ||"mongodb://localhost:27017/skyrattingapp"
mongoose.connect(databaseUrl);