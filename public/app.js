var requests = {}

requests.getReq = function(url){
  $.get( url, function( data ) {
    requests.appendProgrammes(data.programmes)
  });
};

requests.appendProgrammes = function(data){
  var i = 0;
  for(i;i<data.length;i++){
    $('#programmes').append(
      "<div class='col s4'>" +
      "<div class='card'>" +
      "<div class='card-image waves-effect waves-block waves-light'>" +
      "<img class='activator' src='http://www.wired.com/wp-content/uploads/2014/04/Fargo.jpg'>" +
      "</div>" +
      "<div class='card-content'>" +
      "<span class='card-title activator grey-text text-darken-4'>" + data[i].name + "</span>" +
      "</div>" +
      "</div>" +
      "</div>"
      )
  };
};



requests.ajaxReq = function(method,url,data){
  $.ajax({
    type: method,
    url: url,
    data: {data: data},
    success: function(data){
    }
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
    requests.ajaxReq("POST", "/api/programmes/", data)
    requests.appendProgrammes(data)
  };
  reader.readAsText(files[0]);
  $("#selectfile").val('');
};

requests.getReq("api/programmes");
document.getElementById("selectfile").addEventListener("change", requests.readXml, false)
