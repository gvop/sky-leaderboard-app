var requests = {}

requests.getReq = function(url){
  $.get( url, function( data ) {
    $("h1").html( data.programmes[2].name );
  });
};

requests.readXml = function(event){
  var i = 0;
  var data = [];
  var files = event.target.files;
  var reader = new FileReader();
  reader.onload = function() {
    var parsed = new DOMParser().parseFromString(this.result, "text/xml");
    var parsedArray = parsed.getElementsByTagName("programma");
    for(i;i<parsedArray.length;i++){
      var programme = {
        programmeId : parsedArray[i].id,
        name        : parsedArray[i].children[0].innerHTML,
        imagePath   : parsedArray[i].children[1].innerHTML
      }
      data.push(programme)
    };
    console.log(data)
  };
  reader.readAsText(files[0]);
};



requests.getReq("api/programmes");
document.getElementById("selectfile").addEventListener("change", requests.readXml, false)
