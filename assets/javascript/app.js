$(document).ready(function(){


 var questionNumber = 0;
 var loss = 0;
 var win= 0;
 




//game start
gameStart();


function gameStart() {
 $("aside").show();

 $("article, section").hide();

 $("aside").on("click", function(event) {

 	$("aside").hide();
 	$("article, section").show();
    nextQuestion();
    event.stopPropagation();
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
            nextQuestion();
 				

 		}

};



function stop(){
		clearInterval(counter);

};

function end(){
		clearInterval(counter);

};

//end timer section



function nextQuestion(){
	    //$("#answer3").addClass("correct");
		questions(quiz[0].question);
        answers(quiz[0].answer[0], quiz[0].answer[1], quiz[0].answer[2], quiz[0].answer[3]);
        number = 5;
        
        run();
	

	// for(var i = 0; i <= questionNumber.length; i++) {
 //   console.log(questionNumber[i]);
	// }


if(questionNumber === 1) {
	    //$("#answer3").removeClass("correct");
	    //$("#answer4").addClass("correct");
		questions(quiz[1].question);
		var picture = "<img src='https://wildrovertours.com/wp-content/uploads/2015/12/Cliffs-of-Moher-5.jpg'>"
        document.querySelector("#images").innerHTML = picture; 
        answers(quiz[1].answer[0], quiz[1].answer[1], quiz[1].answer[2], quiz[1].answer[3]);
        

}


if(questionNumber === 2) {

        //$("#answer4").removeClass("correct");
        //$("#answer1").addClass("correct");
		questions(quiz[2].question);
        answers(quiz[2].answer[0], quiz[2].answer[1], quiz[2].answer[2], quiz[2].answer[3]);
        $("#images").hide();
        

}

if(questionNumber === 3) {


		questions(quiz[3].question);
        answers(quiz[3].answer[0], quiz[3].answer[1], quiz[3].answer[2], quiz[3].answer[3]);
        

}

if(questionNumber === 4) {

   
		questions(quiz[4].question);
		var picture = "<img src='http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-machu-picchu.jpg.rend.tccom.616.462.jpeg'>"
        document.querySelector("#images").innerHTML = picture; 
        answers(quiz[4].answer[0], quiz[4].answer[1], quiz[4].answer[2], quiz[4].answer[3]);
        $("#images").show();

}


 else if(questionNumber ===5) {
	$("#images").hide();
	$("#questions").text("wins" + win + "losses" + loss);
	end();
	$("section").remove();
	$("#timer").remove();



// else if(questionNumber === 5) {

// 		$("#images").remove();
// 		questions(quiz[5].question);
// 	    answers(quiz[5].answer);
        

};
end();

};






var quiz = [{

	question: "What is the largest country located entirely in Europe?",
	answer: ["Germany", "Spain", "France", "Ukraine"],
	correct: "France"
},

{
	question: "What country are these cliffs located in??",
	answer: ["Canada", "Peru", "Japan", "Ireland"],
	correct: "Ireland"
},

{
	question: "What is the most visited tourist attraction in the world?",
	answer: ["Times Square", "Disney World", "The Colosseum", "The Eiffel Tower"],
	correct: "Times Square"
},

{ 
	question: "Where was Leonardo DiCaprio's movie, 'The Beach', filmed?",
	answer: ["Fiji", "Hawaii", "Thailand", "Costa Rica"]
	//correct: //quiz[3].answer[2];//?

},

{ 
	question: "Where is this Wonder of the World Located?",
	answer: ["Scotland","Mexico","Peru", "Indonesia"],
	correct: "something else correct"

},
]

//OR loop through
var correct = ["France", "Ireland", "Times Square"];

//correct indicator



$("section ul a").on("click",function(event) {
	console.log(this);
	
 if($("section ul a").is()) {
// var compare = $(this);
// console.log(this)
// //if (this === quiz.correct) {
// 	//console.log ("you got it!")
// //}
// if (correct.indexOf(compare) == -1) {
// 	console.log("incorrect");
// 	loss--
// }
//     else {
    	win++
    	console.log("correct!")
    
    }
event.stopPropagation();


});


});


