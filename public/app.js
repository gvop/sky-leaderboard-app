var requests = {}

requests.getReq = function(url){
  $.get( url, function( data ) {
    $("h1").html( data.programmes[2].name );
  });
}

requests.fileUpload = function(event){
  event.preventDefault()
  var statusBox = $("#status");
  var fileType = $('input:file').val().match(/[^\s.]+/g)[1]
  if(fileType != "xml") return statusBox.empty().text("Only XML files can be uploaded");
 
  statusBox.empty().text("File is uploading...");
  $(this).ajaxSubmit({
    error: function(xhr) {
      status('Error: ' + xhr.status);
    },
    success: function(response) {
      statusBox.empty().text(response);
    }
  });   
  return false; 
}

requests.getReq("api/programmes");
$('#uploadForm').submit(requests.fileUpload);
