var correctAnswers = []

var currentQuestion = null;
var currentPoints = 0;
var numberOfAnswersRight  = 0;
var level = 1;


function loadLegalQuestion() {
	currentQuestion = getNextLegalQuestion();
	$("#legal-question").text(currentQuestion['assertion']);
	$("#legal-question-info").text(currentQuestion['info']);
	$("#legal-question-info").css('display', 'none');
	$("#legal-true").css('color','black')	
	$("#legal-true").removeAttr('disabled');
	$("#legal-false").css('color','black')
	$("#legal-false").removeAttr('disabled');
}

function loadIlegalQuestion() {
	currentQuestion = getNextIlegalQuestion();
	$("#ilegal-question").text(currentQuestion['assertion']);
	$("#ilegal-question-info").text(currentQuestion['info']);
	$("#ilegal-question-info").css('display', 'none');
	
	$("#ilegal-true").css('color','black')	
	$("#ilegal-true").removeAttr('disabled');
	
	$("#ilegal-false").css('color','black')
	$("#ilegal-false").removeAttr('disabled');
}

function loadAzarQuestion() {
	currentQuestion = getRandomQuestion();
	$("#azar-question").text(currentQuestion['assertion']);
	$("#azar-question-info").text(currentQuestion['info']);
	$("#azar-question-info").css('display', 'none');
	
	$("#azar-true").css('color','black')	
	$("#azar-true").removeAttr('disabled');
	
	$("#azar-false").css('color','black')
	$("#azar-false").removeAttr('disabled');
}


$("#legal-trivia").ready(function() {
	loadLegalQuestion()
});

$("#legal-next-btn").click(function() {
	loadLegalQuestion()
});

$("#ilegal-trivia").ready(function() {
	loadIlegalQuestion()
});

$("#ilegal-next-btn").click(function() {
	loadIlegalQuestion()
});


$("#azar-trivia").ready(function() {
	loadAzarQuestion()
});

$("#azar-next-btn").click(function() {
	loadAzarQuestion()
});




$("#legal-true").click(function() {
	currentResponse = "VERDADERO";
	$("#legal-question-info").css('display', 'block');
	checkAnswer(currentResponse,"#legal-true")	
});


$("#legal-false").click(function() {
	currentResponse = "FALSO";
	$("#legal-question-info").css('display', 'block');
	checkAnswer(currentResponse,"#legal-false")
});

$("#ilegal-true").click(function() {
	currentResponse = "VERDADERO";
	$("#ilegal-question-info").css('display', 'block');
	checkAnswer(currentResponse,"#ilegal-true")	
});


$("#ilegal-false").click(function() {
	currentResponse = "FALSO";
	$("#ilegal-question-info").css('display', 'block');
	checkAnswer(currentResponse,"#ilegal-false")
});


$("#azar-true").click(function() {
	currentResponse = "VERDADERO";
	$("#azar-question-info").css('display', 'block');
	checkAnswer(currentResponse,"#azar-true")	
});


$("#azar-false").click(function() {
	currentResponse = "FALSO";
	$("#azar-question-info").css('display', 'block');
	checkAnswer(currentResponse,"#azar-false")
});


function checkAnswer(currentResponse, selectedBtn){
	if (currentQuestion['answer'] == currentResponse) {
		currentPoints += 10;
		$(selectedBtn).css('color','green');
		numberOfAnswersRight++;
		if (numberOfAnswersRight % 3 == 0) {
			alert("Pasaste de nivel")
			level++	
		}
	} else {
		$(selectedBtn).css('color','red');
	}
	$("#legal-true").attr('disabled','disabled');
	$("#legal-false").attr('disabled','disabled');

	$("#ilegal-true").attr('disabled','disabled');
	$("#ilegal-false").attr('disabled','disabled');

	$("#azar-true").attr('disabled','disabled');
	$("#azar-false").attr('disabled','disabled');
}
