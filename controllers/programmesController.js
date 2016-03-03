var Programme   = require('../models/programme');


function programmesAdd(req, res){
  console.log("programmesAdd")
}

function programmesShow(req, res) {
  console.log("programmesShow")
}

function programmesUpdate(req, res){
  console.log("programmesUpdate")
}

module.exports = { 
  programmesShow:   programmesShow,
  programmesUpdate: programmesUpdate,
  programmesAdd: programmesAdd
}