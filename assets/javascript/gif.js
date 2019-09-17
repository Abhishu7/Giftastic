$(document).ready(function () {
    var animals = ["elephant", "hippopotamus", "giraffe", "tiger", "lion", "rhinoceros", "cheetah", "zebra"]
  
    function renderButtons() {
      $("#animalButtons").empty();
  
      for (var i = 0; i < animals.length; i++) {
  
        var a = $("<button>");
  
        a.addClass("animalBtn");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
  
        $("#animalButtons").append(a);
    } 
} 
$("#addAnimal").on("click", function (event) {
  event.preventDefault();
  var animal = $("#animalInput").val().trim();

  if (($.inArray(animal, animals) < 0) && (animal.length > 0)) {
    animals.push(animal);
  }
  renderButtons();
  $("#animalInput").val("");
});
 
})
