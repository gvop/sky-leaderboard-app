var requests = {}

requests.getReq = function(url){
  $.get( url, function( data ) {
    $( "h1" ).html( data.programmes[2].name );
  });
}

requests.getReq("api/programmes")

$("#uploadForm").submit(function(event){
  event.preventDefault();
  console.log(event.target.image.value)
  $.ajax({
    type: "POST",
    url: "/upload",
    data: data,
    success: success,
    dataType: dataType
  });
})

