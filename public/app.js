console.log("connected")

var requests = {}

requests.getReq = function(url){
  $.get( url, function( data ) {
    console.log(data)
    $( "h1" ).html( data.programmes[2].name );
  });
}

requests.getReq("api/programmes")