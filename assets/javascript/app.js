$(document).ready(function(){


 var questionNumber = 0;




//game start
gameStart();


function gameStart() {
 $("aside").show();

 $("article, section").hide();

 $("aside").on("click", function() {

 	$("aside").hide();
 	$("article, section").show();

     });
};
//end game start





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
            nextQuestion();
 			questionNumber++	

 		}

};



function stop(){
		clearInterval(counter);

};


function nextQuestion(){
	
		questions(quiz[0].question);
        answers(quiz[0].answer);
        number = 5;
        run();
	

	for(var i = 0; i <= questionNumber.length; i++) {
   console.log(questionNumber[i]);
	}


if(questionNumber === 1) {
		questions(quiz[1].question);
        answers(quiz[1].answer);

}


if(questionNumber === 2) {


		questions(quiz[2].question);
        answers(quiz[2].answer);

}

if(questionNumber === 3) {


		questions(quiz[3].question);
        answers(quiz[3].answer);

}

if(questionNumber === 4) {


		questions(quiz[4].question);
        answers(quiz[4].answer);

}

if(questionNumber === 5) {


		questions(quiz[5].question);
        answers(quiz[5].answer);

}

};


//end timer section



var quiz = [{

	question: "A quesiton goes here",
	answer: ["kiwi, apples, oranges, lime"],
	correct: "apples",
},

{
	question: "a second question",
	answer: "a second answer"
},

{
	question: "a third question",
	answer: "a third answer"
},

{ 
	question: "a fourth",
	answer: "an answer"

},

{ 
	question: "a fifth",
	answer: " a fith answer"

},
]


});


