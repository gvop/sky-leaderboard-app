$(init)
function init(){
  requests.pageStart($('#programmes'))
  requests.pageStart($('#leaderboard'))
  var rating      = $("#rating_page")
  var upload      = $("#upload_page")
  var leaderboard = $("#leaderboard_page")

  $("#rate").addClass("bold")
  rating.show()
  upload.hide()
  leaderboard.hide()

  $("#delete").on("click", function(){
    var confirm = window.confirm("Are you sure you want to delete all programmes?");
    if(confirm){
      requests.ajaxReq("delete","api/programmes","data");
      return location.reload();
    } 
    return;
  })

  $("#rate").on("click", function(){
    $("#rate").addClass("bold")
    $("#content").removeClass("bold")
    $("#upload").removeClass("bold")
    leaderboard.hide()
    upload.hide()
    rating.show()
    if(requests.xmlData) requests.getReq("api/programmes");
  })

  $("#content").on("click", function(){
    $("#rate").removeClass("bold")
    $("#content").addClass("bold")
    $("#upload").removeClass("bold")
    rating.hide()
    upload.hide()
    leaderboard.show()
    if(requests.xmlData) requests.getReq("api/programmes");
  })

  $("#upload").on("click", function(){
    $("#rate").removeClass("bold")
    $("#content").removeClass("bold")
    $("#upload").addClass("bold")
    leaderboard.hide()
    rating.hide()
    upload.show()
    requests.getReq("api/programmes");
  })
}

