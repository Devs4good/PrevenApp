var correctAnswers = []

var currentQuestion = null;
var currentResponse = null;
var currentPoints = 0;




function loadQuestion() {
	let q = getNextLegalQuestion();
	currentQuestion = q;
	$("#legal-question").text(q['assertion']);
}


$( "#legal-trivia" ).ready(function() {
	loadQuestion()
});

$( "#legal-next-btn" ).click(function() {
  	checkAnswer()
});


$( "#legal-true" ).click(function() {
	currentResponse = "VERDADERO";
});


$( "#legal-false" ).click(function() {
	currentResponse = "FALSO";
});


function checkAnswer(){
	if (currentQuestion['answer'] == currentResponse) {
		currentPoints += 10;
	}
	loadQuestion()
}
