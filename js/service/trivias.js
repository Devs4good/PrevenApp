var correctAnswers = []

var currentAnswer = null;


$( "#legal-trivia" ).ready(function() {
	alert(legalQuestions)
});

$( "#legal-netx-btn" ).click(function() {
  alert( "Handler for .click() called." );
  checkAnswer()
});

function checkAnswer(){

}

function getNextLegalQuestion(){
	return legalQuestions.pop()
}


function getNextIlegalQuestion(){
	return ilegalQuestions.pop()
}

function getLegalQuestions(){
	return legalQuestions
}

function getIlegalQuestions(){
	return ilegalQuestions
}
