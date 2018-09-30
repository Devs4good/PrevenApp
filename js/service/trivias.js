var legalQuestions = []
var ilegalQuestions = []
var correctAnswers = []


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


function loadQuestions(questions) {
	for (var i = 1; i < questions.length; i++) {
		question = questions[i]
		var q = { 'assertion':question[0], 'answer':question[1],'info':question[2], 'category':question[3]}
		if (question[3] == 'LEGAL') {
			legalQuestions.push(q)	
		} else {
	  		ilegalQuestions.push(q)
		}
	}
	
}