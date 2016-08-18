$(document).ready(function(){


 var timeRanOut = 0;

 var missed = 0;
 var win= 0;
 var miss=0;




//game start
gameStart();


function gameStart() {
 $("aside").show();

 $("article, section").hide();

 $("aside").on("click", function(event) {

 	$("aside").hide();
 	$("article, section").show();
    event.stopPropagation();
    //nextQuestion();
     run();
     });
};
//end game start


//content

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
 
//end content 

//content html display
function questions (prompt1) {
   $("#questions").text(prompt1);


};

function answers (a,b,c,d) {
$("#answer1").text(a);
$("#answer2").text(b);
$("#answer3").text(c);
$("#answer4").text(d);
   
 
};

//end content html display


//timer section

var number = 20;

	function run() {

    	counter = setInterval(timeLeft, 1000);
	}


function stop(){
		clearInterval(counter);

};


	function timeLeft() {
  		number--
 		$('#timer').html('<h2>' + number + '</h2>');

 		if(number === 0) {
 			stop();
	        timeRanOut++;
	        console.log(timeRanOut)
            $("#questions").text("Time is up!");
	        nextQuestion();
            number = 20;
            run();
            
 		}

//end timer section

};




 function correct(answer){
 	$("section ul a").on("click",function(event) {
	var userPick = ($(this).text());
    console.log(userPick)
      
 
 		if (userPick == answer) {

  			
  			win++
  			number = 10;
  			return questions("Correct!");
  			

  			
			 }
        else if (userPick !== answer) {
        	miss++;
        	number = 10;
        	return questions("Wrong! Correct answer was " + answer);;
        }
  		return
// // // 	console.log(loss++)
// // // 	console.log("incorrect");

  	 


   
	event.stopPropagation();
 
    
});
return

};


// function displayCorrect (){
// 	var restartCorrect = 5;
//  function restart() {
// 	counter = setInterval(timeLeft, 1000);
// }
// 	function timeRemains() {
// 	restartCorrect--
//  		$('#timer').html('<h2>' + restartCorrect + '</h2>');

// }
// 	questions("You Got it!");
// 	stop();
// };


if(timeRanOut === 0) {
    questions(quiz[0].question);
  	answers(quiz[0].answer[0], quiz[0].answer[1], quiz[0].answer[2], quiz[0].answer[3]);
	 correct(quiz[0].correct);
	 

}

function nextQuestion () {
  if(timeRanOut  === 1 || win === 1) {
	   
	   
	   correct(quiz[1].correct);
		questions(quiz[1].question);
		var picture = "<img src='https://wildrovertours.com/wp-content/uploads/2015/12/Cliffs-of-Moher-5.jpg'>"
        document.querySelector("#images").innerHTML = picture; 
        answers(quiz[1].answer[0], quiz[1].answer[1], quiz[1].answer[2], quiz[1].answer[3]);   
       
}



   if(timeRanOut ===2 || win ===2) {


        correct(quiz[2].correct);
		questions(quiz[2].question);
        answers(quiz[2].answer[0], quiz[2].answer[1], quiz[2].answer[2], quiz[2].answer[3]);
        $("#images").hide();
       
        

}

  if(timeRanOut ===3 || win === 3) {
		correct(quiz[3].correct);
		questions(quiz[3].question);
        answers(quiz[3].answer[0], quiz[3].answer[1], quiz[3].answer[2], quiz[3].answer[3]);
        

}

  if(timeRanOut === 4 || win === 4) {

        correct(quiz[4].correct);
		questions(quiz[4].question);
		var picture = "<img src='http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-machu-picchu.jpg.rend.tccom.616.462.jpeg'>"
        document.querySelector("#images").innerHTML = picture; 
        answers(quiz[4].answer[0], quiz[4].answer[1], quiz[4].answer[2], quiz[4].answer[3]);
        $("#images").show();
        

}

if (timeRanOut ===5 || win === 5) {
 	 $("#images").hide();
 	 $("#questions").text("correct " + win + " missed " + (win - loss));
 	 stop();
     $("section").remove();
 	 $("#timer").remove();
}
};
// }




// else if(questionNumber === 5) {

// 		$("#images").remove();
// 		questions(quiz[5].question);
// 	    answers(quiz[5].answer);
        

//};






});


