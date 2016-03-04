var fs        = require('fs');
var xml2js    = require('xml2js');


 
function convert(){
  var parser = new xml2js.Parser();
  fs.readFile('../public/uploads/1j6dfG92nh6.xml', function(err, data) {
      parser.parseString(data, function (err, result) {
          console.dir(result);
          console.log('Done');
      });
  });
}

module.exports = { 
  convert: convert
}

