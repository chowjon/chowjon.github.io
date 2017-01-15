//single line comment
/*multi-line comment*/

function askQuestions() {

	var firstName = prompt('What is Your First Name?'),
		lastName = prompt('What is Your Last Name?'),
		fullName = firstName+' '+lastName;


	console.log(fullName) //shows the defined variable in the console log

	var age = prompt('How Old Are You?'); //conditional statement example
	age = parseInt(age);
	if (age>=18 && firstName == 'Jon' || lastName == 'Chow') {
		console.log('Win');
	} else if (age >=13) {
		console.log('Teens')
	}else{
		console.log('Get Old')
	}


	if (firstName.toLowerCase().trim() ==='general' && lastName.toLowerCase()!=='Assembly'){
		console.log("'ello General")
	}
}


//when page loaded: below is showing, when JQ has loaded run the following code
$(function() {

	//when the user clicks h3 element: JQ can recognise CSS identifiers
	$('h3').on('click', function() {
	
	//hide next element: toggle is useful accordian tool
	$(this).next().slideToggle(1000);

	})

})