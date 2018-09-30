var correctAnswers = []

var currentQuestion = null;
var currentResponse = null;
var currentPoints = 0;
var numberOfAnswers  = 0;



function loadQuestion() {
	currentQuestion = getNextLegalQuestion();
	$("#legal-question").text(currentQuestion['assertion']);
	$("#legal-question-info").text(currentQuestion['info']);
	$("#legal-question-info").css('display', 'none');
}


$( "#legal-trivia" ).ready(function() {
	loadQuestion()
});

$( "#legal-next-btn" ).click(function() {
	loadQuestion()
});


$( "#legal-true" ).click(function() {
	currentResponse = "VERDADERO";
	$("#legal-question-info").css('display', 'block');
	checkAnswer()	
});


$( "#legal-false" ).click(function() {
	currentResponse = "FALSO";
	$("#legal-question-info").css('display', 'block');
	checkAnswer()
});


function checkAnswer(){
	if (currentQuestion['answer'] == currentResponse) {
		currentPoints += 10;
	}

}
