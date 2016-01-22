
// var countTo = document.getElementById("pingpong");
var countTo = 10

var countUp = function() {
    var numberBank = [];

    for (var i = 1; i <= countTo; i++) {
      var ping = "PING"
      var pong = "PONG"
      if (i % 3 === 0) {
		      numberBank.push(ping);
		      }
      else if (i % 5 === 0) {
    		  numberBank.push(pong);
    		  }
      else {
          numberBank.push(i);
      }
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
