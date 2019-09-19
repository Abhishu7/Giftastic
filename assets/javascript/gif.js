$(document).ready(function () {
  var players = ["cristiano ronaldo", "lionel messi", "neymar", "zlatan ibrahimovic"]

  function renderButtons() {
    $("#soccerButtons").empty();
    console.log(players);
    for (var i = 0; i < players.length; i++) {

      var a = $("<button>");

      a.addClass("soccerBtn");
      a.attr("data-name", players[i]);
      a.text(players[i]);

      $("#soccerButtons").append(a);
    }
  }
  $("#addSoccer").on("click", function (event) {
    event.preventDefault();
    var player = $("#soccerInput").val().trim();
    console.log(player);
    if (($.inArray(player, players) < 0) && (player.length > 0)) {
      players.push(player);
    }
    renderButtons();
    $("#soccerInput").val("");
  });
  $(document).on("click", ".soccerBtn", function (event) {
    console.log(event)
    event.preventDefault();
    var player = $(this).attr("data-name");
    $("#soccerGif").empty();

    var queryURL = "https://api.giphy.com/v1/gifs/random?tag=" +
      player + "&api_key=5AMolnIU0fKHH8CChmVDrbPXDGPVogk8";

    for (var i = 0; i < 10; i++) {

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function (response) {
          console.log(response)
          var results = response.data;

          var soccerDiv = $("<div>");

          var soccerImage = $("<img>");
          console.log(results.images.fixed_height_still.url);

          soccerImage.attr({
            src: results.images.fixed_height_still.url,
            dataStill: results.images.fixed_height_still.url,
            dataAnimate: results.images.fixed_height.url,
            dataState: "still"
          });
          soccerDiv.append(soccerImage);

          $("#soccerGif").prepend(soccerDiv);

        });
    }
  });

  $(document).on("click", "img", function (event) {
    event.preventDefault();
    var state = $(this).attr("dataState");

    if (state == "animate") {
      $(this).attr("src", $(this).attr("dataStill"));
      $(this).attr("dataState", "still");
    } else {
      $(this).attr("src", $(this).attr("dataAnimate"));
      $(this).attr("dataState", "animate");
    }
  });
  renderButtons();

});


