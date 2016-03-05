$(init)

function init(){
  $("#rate").addClass("bold")
  $("#rating_page").show()
  $("#upload_page").hide()
  $("#leaderboard_page").hide()

  $("#rate").on("click", function(){
    $("#rate").addClass("bold")
    $("#content").removeClass("bold")
    $("#upload").removeClass("bold")
    $("#leaderboard_page").hide()
    $("#upload_page").hide()
    $("#rating_page").show()
    requests.getReq("api/programmes");
  })

  $("#content").on("click", function(){
    $("#rate").removeClass("bold")
    $("#content").addClass("bold")
    $("#upload").removeClass("bold")
    $("#rating_page").hide()
    $("#upload_page").hide()
    $("#leaderboard_page").show()
    requests.getReq("api/programmes");
  })

  $("#upload").on("click", function(){
    $("#rate").removeClass("bold")
    $("#content").removeClass("bold")
    $("#upload").addClass("bold")
    $("#leaderboard_page").hide()
    $("#rating_page").hide()
    $("#upload_page").show()
    requests.getReq("api/programmes");
  })
}