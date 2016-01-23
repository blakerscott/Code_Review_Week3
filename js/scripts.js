



var gamePlay = function(countTo) {
    var numberBank = [];

    for (var i = 1; i <= countTo; i++) {
      var ping = "PING"
      var pong = "PONG"
      var pingpong = "PINGPONG"
      if (i % 15 === 0) {
    		  numberBank.push(pingpong);
    		  }
      else if (i % 3 === 0) {
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

$(document).ready(function() {
  $("form").submit(function(event) {
    $("ul").empty();
    var countTo = parseInt($("input#countTo").val());
    var pingPongOutput = gamePlay(countTo);
    pingPongOutput.forEach(function(i) {
      $("#pingPongCode").append("<li>" + i + "</li>");
    });
    $("#pingPongCode").show();

    event.preventDefault();
  });
});






// $(document).ready(function(){
//   $("form").submit(function(event){
//     var countTo = parseInt($("#countTo").val());
//     $("#result").text(gamePlay(countTo));
//
//     event.preventDefault();
//   });
//
// });
