$(document).ready(function(){


 var timeRanOut = 0;
 var madeSelection = 0;
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



var number = 20;

	function run() {

    	counter = setInterval(timeLeft, 1000);
	}


	function timeLeft() {
  		number--
 		$('#timer').html('<h2>' + number + '</h2>');

 		if(number === 0) {
 			stop();
	        timeRanOut++
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




function correct(answer){

$("section ul a").on("click",function(event) {
	

	var userPick = ($(this).text());
    console.log(userPick)

 if (userPick == answer) {
 console.log ("you got it!")
 console.log(win++)
madeSelection++
 nextQuestion();
 
 }

else  {
	console.log(loss++)
	console.log("incorrect");
	nextQuestion();
	madeSelection++
	


   }

   
event.stopPropagation();


});

};



function nextQuestion(){

    questions(quiz[0].question);
  	answers(quiz[0].answer[0], quiz[0].answer[1], quiz[0].answer[2], quiz[0].answer[3]);
        number = 20;
	     run();
	 correct(quiz[0].correct)



if(timeRanOut || madeSelection === 1) {
	   
		questions(quiz[1].question);
		var picture = "<img src='https://wildrovertours.com/wp-content/uploads/2015/12/Cliffs-of-Moher-5.jpg'>"
        document.querySelector("#images").innerHTML = picture; 
        answers(quiz[1].answer[0], quiz[1].answer[1], quiz[1].answer[2], quiz[1].answer[3]);
        
        correct(quiz[1].correct);
}


else if(timeRanOut || madeSelection=== 2) {

        
		questions(quiz[2].question);
        answers(quiz[2].answer[0], quiz[2].answer[1], quiz[2].answer[2], quiz[2].answer[3]);
        $("#images").hide();
        correct(quiz[2].correct);
        

}

else if(timeRanOut || madeSelection=== 3) {


		questions(quiz[3].question);
        answers(quiz[3].answer[0], quiz[3].answer[1], quiz[3].answer[2], quiz[3].answer[3]);
        correct(quiz[3].correct);

}

else if(timeRanOut || madeSelection=== 4) {

   
		questions(quiz[4].question);
		var picture = "<img src='http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-machu-picchu.jpg.rend.tccom.616.462.jpeg'>"
        document.querySelector("#images").innerHTML = picture; 
        answers(quiz[4].answer[0], quiz[4].answer[1], quiz[4].answer[2], quiz[4].answer[3]);
        $("#images").show();
        correct(quiz[4].correct);

}


 else if(timeRanOut || madeSelection===5) {
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
	answer: ["Fiji", "Hawaii", "Thailand", "Costa Rica"],
	correct: "Thailand"

},

{ 
	question: "Where is this Wonder of the World Located?",
	answer: ["Scotland","Mexico", "Peru", "Indonesia"],
	correct: "Peru"

},
]









//correct indicator






});


