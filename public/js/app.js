var rating = {
  programmes : []
}

rating.getScore = function(score, id){
  console.log(score + " stars have gave")
  var url = "/api/programmes/" + id;
  requests.ajaxReq("PUT", url, score )
}

var requests = {}
requests.getReq = function(url){
  $.get( url, function( data ) {
    requests.appendProgrammes(data.programmes, "#programmes")
    requests.sortData(data.programmes)
  });
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

requests.sortData = function(data){
  var sorted = data.sort(function (a, b) {
    if (a.avarageRating > b.avarageRating) {
      return -1;
    }
    if (a.avarageRating < b.avarageRating) {
      return 1;
    }
    return 0;
  });
  return requests.appendProgrammes(sorted, "#leaderboard")
}

requests.addStars = function(){
  var score      = $("#leaderboard .stars")
  score.empty()
  for(var i=0;i<score.length;i++){
    var scoreLength = $(score[i]).attr('score')
    for(var j=0;j<scoreLength;j++){
      $(score[i]).append("<i class='fa fa-star'></i>")
    }
  }
}

requests.appendProgrammes = function(data, div){
  $(div).empty();
  var i = 0;
  var j = 0;
  for(i;i<data.length;i++){
    $(div).append(
      "<div class='col s4'>" +
      "<div class='card'>" +
      "<div class='card-image waves-effect waves-block waves-light'>" +
      "<img class='activator' src='http://www.wired.com/wp-content/uploads/2014/04/Fargo.jpg'>" +
      "</div>" +
      "<div class='card-content'>" +
      "<span class='card-title activator grey-text text-darken-4'>" + 
      data[i].name + 
      "</span>" +
      "<div class='stars' score='" + data[i].avarageRating + "' data-id='" +
      data[i]._id +
      "'>" +
      "<i class='fa fa-star-o'></i>" +
      "<i class='fa fa-star-o'></i>" +
      "<i class='fa fa-star-o'></i>" +
      "<i class='fa fa-star-o'></i>" +
      "<i class='fa fa-star-o'></i>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>"
      );
  };

  requests.addStars()

  $(".stars i").on("click", function(){
    var indexScore  = $(this).index()
    var parent      = $(this).parent()
    var programmeId = parent.attr('data-id')
    var childs      = parent.children()
    var score       = (indexScore + 1)

    childs.each(function(index) {
      if(index < score){
        $(this).addClass('fa-star').removeClass('fa-star-o')
      } else {
        $(this).removeClass('fa-star-o').addClass('fa-star-o')
      }
    });
    rating.getScore(score, programmeId)
  })
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
    requests.getReq("api/programmes");
  };
  reader.readAsText(files[0]);
  $("#rating_page").show()
  $("#rate").addClass("bold")
  $("#content").removeClass("bold")
  $("#upload").removeClass("bold")
  $("#upload_page").hide()
  $("#leaderboard_page").hide()
  $("#selectfile").val('');
};

requests.getReq("api/programmes");
document.getElementById("selectfile").addEventListener("change", requests.readXml, false)



