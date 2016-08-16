$(document).ready(function(){


 var questionNumber = 0;
 var loss = 0;
 var win= 0;




//game start
gameStart();


function gameStart() {
 $("aside").show();

 $("article, section").hide();

 $("aside").on("click", function() {

 	$("aside").hide();
 	$("article, section").show();
    nextQuestion();
     });
};
//end game start





function questions (prompt1) {
   $("#questions").text(prompt1);


};

function answers (a,b,c,d) {
$("#answer1").text(a);
$("#answer2").text(b);
$("#answer3").text(c);
$("#answer4").text(d);
   
 
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
 			stop();
 			questionNumber++
            nextQuestion();
 				

 		}

};



function stop(){
		clearInterval(counter);

};


//end timer section



function nextQuestion(){
	
		questions(quiz[0].question);
        answers(quiz[0].answer[0], quiz[0].answer[1], quiz[0].answer[2], quiz[0].answer[3]);
        number = 10;
        
        run();
	

	// for(var i = 0; i <= questionNumber.length; i++) {
 //   console.log(questionNumber[i]);
	// }


if(questionNumber === 1) {
		questions(quiz[1].question);
		var picture = "<img src='https://wildrovertours.com/wp-content/uploads/2015/12/Cliffs-of-Moher-5.jpg'>"
        document.querySelector("#images").innerHTML = picture; 
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






var quiz = [{

	question: "What is the largest country located entirely in Europe?",
	answer: ["Germany", "Spain", "France", "Ukraine"],
	correct: "France",
},

{
	question: "What country are these cliffs located in??",
	answer: ["Canada", "Peru", "Japan", "Ireland"]
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


//correct indicator

$("section ul a").on("click",function() {

//if (this === quiz.correct) {
	//console.log ("you got it!")
//}
if (quiz.correct.indexOf(this) -1) {
	console.log("incorrect");
	loss--
}
    else {
    	win++
    	console.log("correct!")
    }
});


});


