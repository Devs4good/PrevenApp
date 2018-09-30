var correctAnswers = []

var currentQuestion = null;
var currentPoints = 0;
var numberOfAnswers  = 0;



function loadQuestion() {
	currentQuestion = getNextLegalQuestion();
	$("#legal-question").text(currentQuestion['assertion']);
	$("#legal-question-info").text(currentQuestion['info']);
	$("#legal-question-info").css('display', 'none');
	
	$("#legal-true").css('color','black')	
	$("#legal-true").removeAttr('disabled');
	
	$("#legal-false").css('color','black')
	$("#legal-false").removeAttr('disabled');
	
}


$("#legal-trivia").ready(function() {
	loadQuestion()
});

$("#legal-next-btn").click(function() {
	loadQuestion()
});


$("#legal-true").click(function() {
	currentResponse = "VERDADERO";
	$("#legal-question-info").css('display', 'block');
	checkAnswer(currentResponse,"#legal-true")	
});


$( "#legal-false" ).click(function() {
	currentResponse = "FALSO";
	$("#legal-question-info").css('display', 'block');
	checkAnswer(currentResponse,"#legal-false")
});


function checkAnswer(currentResponse, selectedBtn){
	if (currentQuestion['answer'] == currentResponse) {
		currentPoints += 10;
		$(selectedBtn).css('color','green');
	} else {
		$(selectedBtn).css('color','red');
	}
	$("#legal-false").attr('disabled','disabled');
	$("#legal-false").attr('disabled','disabled');

}
