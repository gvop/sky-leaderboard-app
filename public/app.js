var requests = {}

requests.getReq = function(url){
  $.get( url, function( data ) {
    $( "h1" ).html( data.programmes[2].name );
  });
}

requests.getReq("api/programmes")

