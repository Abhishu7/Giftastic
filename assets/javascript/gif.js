$(document).ready(function () {
  var players = ["cristiano ronaldo", "lionel messi", "neymar", "zlatan ibrahimovic"]

  function renderButtons() {
    $("#soccerButtons").empty();

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

    if (($.inArray(player, players) < 0) && (player.length > 0)) {
      players.push(player);
    }
    renderButtons();
    $("#soccerInput").val("");
  });
  

});

