var data1 = {

    "questions" : [
		{
			"question_text": "Each computer has a buitl-in instruction that it knows how to execute by design",
			"options": [
				{
					"option_text" : "True",
					"is_correct" : true,
					"option_feedback": "correct answer"
				},
				{
					"option_text" : "False",
					"is_correct" : false,
					"option_feedback": "Each computer has set of primitive instructions that it is wired to execute. We call this the instruction set of computers."

				}
			],
			"hints" : [
				"Recall that we use the term computation to mean the execution of sequence of instrictions by the computer with the intention of solving a given problem."
			]

		}
				

	]

};



var data = JSON.stringify(data1);
console.log(data);
var obj = JSON.parse(data);

function detailsupload()
{
	for(var i=1; i<5; i++)
	{
		var question_id="q" + i;
		document.getElementById(question_id).innerHTML = obj.questions[i-1].question_text;
		document.getElementById(question_id+1+1).innerHTML = obj.questions[i-1].options[0].option_text;
		document.getElementById(question_id+2+2).innerHTML = obj.questions[i-1].options[1].option_text;



	}

}



function check_answer(arg) {

	console.log(arg);

	var question = parseInt(arg[1], 10);
	console.log("q"+question);

	var option = parseInt(arg[2], 10);

	if(obj.questions[question-1].options[option-1].is_correct) {

		document.getElementById("demo" + arg[1]).innerHTML = '<div class = "alert question-cor-ans">' + 

					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +

					"<strong>correct: </strong>" + obj.questions[question-1].options[option-1].option_feedback +

				'</div>';

	} else {

		document.getElementById("demo" + arg[1]).innerHTML = '<div class = "alert  question-inc-ans">' + 

					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +

					"<strong>Incorrect: </strong>" + obj.questions[question-1].options[option-1].option_feedback +

				'</div>';

	}

}



function get_hint(arg) {

	var question = parseInt(arg[1], 10);

	document.getElementById("hint" + arg[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible question-hint">' + 

					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +

					"<strong>Hint: </strong>" + obj.questions[question-1].hints[0] +

				'</div>';



}