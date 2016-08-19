$(document).ready(function(){


 timeRanOut = 0;

 var missed = 0;
 var win= 0;
 var miss=0;
 //var noAnswer= 0;




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

var number = 5;
// var timeup = 3;

	function run() {

    	counter = setInterval(timeLeft, 1000);
	}

	
	function stop(){
		clearInterval(counter);
	}

// 	function restart() {

//     	ticker = setInterval(anotherTicker, 1000);
// 	}

// 	function hold(){
// 		clearInterval(ticker);
// 	}
// 	function anotherTicker() {
// 	timeup--
// 	if(timeup === 0) {
		
// 		noAnswer++
// 		number = 10;
// 		run();
// 		nextQuestion();
// 		console.log(noAnswer)
// 		hold();
// 		$("#timeup").empty();
// 	}
// }

	function timeLeft() {
  	number--
 		$('#timer').html('<h2>' + number + '</h2>');
 		if(number === 0) {
 			stop();
      		timeRanOut++;
      		number = 5;	
      		run();
      		nextQuestion();
  }
 	};

//end timer section





//check answer
 $("section ul a").on("click",function(event) {
    event.stopPropagation();
  	var userPick = ($(this).text());
    var correct = quiz[timeRanOut].correct;

 		if (userPick === correct) {
  			win++
  			number = 5;
  			$("#correct").append("<img src='http://www.marymarcusfiction.com/wp-content/uploads/2015/09/yay-54383329058.jpeg'/>");
        $("section ul a").hide();
  			questions("Correct!");
		 } 

		 else {
      	miss++;
      	number = 5;
      	$("#incorrect").append("<img src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Paris_Tuileries_Garden_Facepalm_statue.jpg'/>");
        $("section ul a").hide();
        questions("Wrong! Correct answer was " +  quiz[timeRanOut].correct);
      }
  });


//end checkanswer


//content display conditionals
if(timeRanOut === 0) {
    questions(quiz[0].question);
  	answers(quiz[0].answer[0], quiz[0].answer[1], quiz[0].answer[2], quiz[0].answer[3]);
}

function nextQuestion () {

  if(timeRanOut  === 1) {
	   $("section ul a").show();
	   $("#correct").empty();
	   $("#incorrect").empty()
  	 questions(quiz[1].question);
  	 var picture = "<img src='https://wildrovertours.com/wp-content/uploads/2015/12/Cliffs-of-Moher-5.jpg'>"
     document.querySelector("#images").innerHTML = picture;
     answers(quiz[1].answer[0], quiz[1].answer[1], quiz[1].answer[2], quiz[1].answer[3]);
   }

 if(timeRanOut === 2) {
   $("section ul a").show();
   $("#correct img:last-child").remove();
   $("#incorrect img:last-child").remove();
	 questions(quiz[2].question);
   answers(quiz[2].answer[0], quiz[2].answer[1], quiz[2].answer[2], quiz[2].answer[3]);
   $("#images").hide();
  }

  if(timeRanOut ===3 ) {
  	$("section ul a").show();
  	$("#correct img:last-child").remove();
	  $("#incorrect img:last-child").remove();
		questions(quiz[3].question);
    answers(quiz[3].answer[0], quiz[3].answer[1], quiz[3].answer[2], quiz[3].answer[3]);
  }

  if(timeRanOut === 4 ) {
  	$("section ul a").show();
    $("#correct img:last-child").remove();
	  $("#incorrect img:last-child").remove();
		questions(quiz[4].question);
		var picture = "<img src='http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-machu-picchu.jpg.rend.tccom.616.462.jpeg'>"
    document.querySelector("#images").innerHTML = picture;
    answers(quiz[4].answer[0], quiz[4].answer[1], quiz[4].answer[2], quiz[4].answer[3]);
    $("#images").show();
  }

  if (timeRanOut ===5 ) {
   	 $("#images").hide();
   	 $("#questions").text("correct " + win + " missed " + (miss));
   	 stop();
     $("section").remove();
   	 $("#timer").remove();
  }
};
//end content display conditionals









});


