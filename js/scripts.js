var countUp = function() {
    // var z = document.getElementById("pingpong");
    var countTo = 10
    var numberBank =[];
    for (var i = 1; i <= countTo; i++) {
      numberBank.push(i);
    }
  return numberBank;
};

$(document).ready(function(){
  $("form").submit(function(event){
    var countTo = parseInt($("input#countTo").val());
    $(".result").text(countUp(countTo, countBy));

    event.preventDefault();
  });
  //event.preventDefault();
});
