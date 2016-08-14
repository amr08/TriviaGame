$(document).ready(function(){

var questionNumber = 0;


gameStart();


function gameStart() {
 $("aside").show();

 $("article, section").hide();

 $("aside").on("click", function() {

 	$("aside").hide();
 	$("article, section").show();

     });
};



function questions (prompt1) {
   $("#questions").text(prompt1);


};

function answers (a) {
$("#answer1").text(a);
   
 
};




//timer section

run();

var number = 5;

	function run() {

    	counter = setInterval(timeLeft, 1000);
	}


	function timeLeft() {
  		number--
 		$('#timer').html('<h2>' + number + '</h2>');

 		if(number === 0) {
 			stop();
 			questionNumber++

 			questions("What is the next question?");
 			answers("how do I fix this?");

 		}

};

	function stop(){
		clearInterval(counter);
		}

//end timer section





});