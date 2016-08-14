$(document).ready(function(){


gameStart();


function gameStart() {
 $("aside").show();

 $("article, section").hide();

 $("aside").on("click", function() {

 	$("aside").hide();
 	$("article, section").show();

     });
};



//timer section

run();

var number = 10;

	function run() {

    	counter = setInterval(timeLeft, 1000);
	}


	function timeLeft() {
  		number--
 		$('#timer').html('<h2>' + number + '</h2>');

 		if(number === 0) {
 			alert("time up");
 			stop();
 		}

};

	function stop(){
		clearInterval(counter);
		}
		
//end timer section

});