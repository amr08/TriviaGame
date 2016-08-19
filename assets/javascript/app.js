$(document).ready(function(){

timeRanOut = 0;
var win= 0;
var miss=0;
var number=15;


//content

var quiz = [{

		question: "What is the largest country located entirely in Europe?",
		answer: ["Germany", "Spain", "France", "Ukraine"],
		correct: "France"
	},

	{
		question: "What country are these cliffs located in?",
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

    {
		question: "The great Victoria Desert is located in?",
		answer: ["Canada","West Africa", "Australia", "North America"],
		correct: "Australia"
	},
];

//end content


//game start

function gameStart() {
 $("aside").show();
 $("article, section").hide();

 $("aside").on("click", function(event) {

 	$("aside").hide();
 	$("article, section").show();
    event.stopPropagation();
    run();
    });
};
//end game start


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


function run() {

    counter = setInterval(timeLeft, 1000);
}

function stop(){
	clearInterval(counter);
}


function timeLeft() {
  	number--
 	$('#timer').html('<h2> Time Remaining: ' + number + '</h2>');

 	if(number === 0) {
 		stop();
      	timeRanOut++;
    	imagesWrong();
      	number = 15;	
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
  			number = 3;
  			$('#timer').hide();
  			imagesCorrect();  
        	$("section ul a").hide();
  			questions("Correct!");
		 } 

		else  {
      		miss++;
      		number = 5;
      		$('#timer').hide();
      		imagesWrong();
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

 	if (timeRanOut  === 1) {
 		$('#timer').show();
 		$("section ul a").show();

		$("#correct").empty();
		$("#incorrect").empty();

    	questions(quiz[1].question);
    	answers(quiz[1].answer[0], quiz[1].answer[1], quiz[1].answer[2], quiz[1].answer[3]);

  		var picture = "<img src='https://raw.githubusercontent.com/amr08/TriviaGame/master/assets/images/" + 
  						"Cliffs-of-Moher-5.jpg'>"
    	document.querySelector("#images").innerHTML = picture;
    	$("#images").show();
   }

 	if (timeRanOut === 2) {
 		$('#timer').show();
   		$("section ul a").show();

   		$("#correct").empty();
		$("#incorrect").empty();
   		$("#correct img:last-child").remove();
   		$("#incorrect img:last-child").remove();

	 	questions(quiz[2].question);
   		answers(quiz[2].answer[0], quiz[2].answer[1], quiz[2].answer[2], quiz[2].answer[3]);
   		$("#images").hide();
  }

  	if (timeRanOut ===3 ) {
		$('#timer').show();
  		$("section ul a").show();

  		$("#correct img:last-child").remove();
	  	$("#incorrect img:last-child").remove();
	  	$("#correct").empty();
		$("#incorrect").empty();

		questions(quiz[3].question);
    	answers(quiz[3].answer[0], quiz[3].answer[1], quiz[3].answer[2], quiz[3].answer[3]);
  }

  	if (timeRanOut === 4 ) {
  		$('#timer').show();
  		$("section ul a").show();

    	$("#correct img:last-child").remove();
	 	$("#incorrect img:last-child").remove();
	 	$("#correct").empty();
		$("#incorrect").empty();

		questions(quiz[4].question);
		answers(quiz[4].answer[0], quiz[4].answer[1], quiz[4].answer[2], quiz[4].answer[3]);

		var picture = "<img src='https://raw.githubusercontent.com/amr08/TriviaGame/master/assets/images/" + 
						"new-seven-wonders-machu-picchu.jpg.rend.tccom.616.462%20(1).jpeg'>"
    	document.querySelector("#images").innerHTML = picture; 	
    	$("#images").show();
  }

   	if (timeRanOut === 5 ) {
  		$('#timer').show();
  		$("section ul a").show();

    	$("#correct img:last-child").remove();
	 	$("#incorrect img:last-child").remove();
	 	$("#correct").empty();
		$("#incorrect").empty();

		questions(quiz[5].question);
    	answers(quiz[5].answer[0], quiz[5].answer[1], quiz[5].answer[2], quiz[5].answer[3]);
    	("#images").hide();
  }

  	if (timeRanOut ===6 ) {
  		$('#timer').show();
   	 	$("#images").hide();
   	 	$("#questions").html("<h2> Correct Answers: " + win + "<br> Incorrect Answers: " + miss + "<br> Unanswered: " + (timeRanOut-miss-win) + "</h2>");
   		stop();
    	$("section").remove();
   		$("#timer").remove();
   		
  }
};
//end content display conditionals



function imagesCorrect() {
    var url = 'https://raw.githubusercontent.com/amr08/TriviaGame/master/assets/images/correct%20and%20incorrect/',
       imgArray = [ url+'happy-animals-23.jpg',
                    url+'yay-54383329058.jpeg',
                    url+'lZpSEcZ.jpg',
                    url+'giphy.gif',
                    url+'rgtl.gif',
                   

                  ],
        randomNumber = Math.floor((Math.random() * imgArray.length)),
        baseUrl = "<img src=" + imgArray[randomNumber] + ">";

    	$("#correct").append(baseUrl);
    	$("#images").hide();
    	console.log(imgArray)
};


function imagesWrong() {
    var url = 'https://raw.githubusercontent.com/amr08/TriviaGame/master/assets/images/correct%20and%20incorrect/',
        imgArray = [url+'1d0416739c31389a56dafaf0a2e8cf79.jpg',
                    url+'Cute-Owl-Funny-Sad-Bird-Picture.jpg',
                    url+'Fred-Armisen-Confuse-Face-Californians.gif',
                    url+'dVJNUJlVS6yeyEYhtJIL_Confused%20Mark%20Wahlberg.gif',
                    url+'http-%252F%252Fmashable.com%252Fwp-content%252Fuploads%252F2013%252F07%252FDr.-Who.gif',
                    url+'crying.gif',

                  ],
        randomNumber = Math.floor((Math.random() * imgArray.length)),
        baseUrl = "<img src=" + imgArray[randomNumber] + ">";

    	$("#incorrect").append(baseUrl);
    	$("#images").hide();
    	console.log(imgArray)
};


// var APIKey = "dc6zaTOxFJmzC"; 

// 	// Here we are building the URL we need to query the database
// 	var queryURL = "http://api.giphy.com/v1/stickers/search?q=cat&api_key=dc6zaTOxFJmzC" + APIKey;


//      $.ajax({url: queryURL, method: 'GET'})
	 
// 	 .done(function(response) {
// 	 	console.log(response.data);
// $("#timeup").html("<img src=" + response.data + "/>")
// 	 });




$(document).ready(gameStart);
});