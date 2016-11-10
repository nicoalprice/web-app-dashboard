/* Close alert message when X is clicked. */
$("#close-button").click(function() {
	$("#alert").fadeOut("slow");
	$("#alert-dot").fadeOut("slow");
});


/* Use JS to allow you to submit the form and display a confirmation the message was sent. You won't actually submit the form, just simulate the action using JavaScript. */

//when user clicks send
$('#send-button').click(function(e) {
	//prevent default button click behavior
	e.preventDefault();
	$('#message-form').hide();
	//replace html in that section with message and button
	$('#message-user').append('<div id="confirmation"><p>Thanks! Your message has been sent.</p><p><button id="new-message">New Message</button><p></div>');
	//when user clicks new message button
		$('#new-message').click(function(){
			// remove confirmation message and button
			$('#confirmation').remove();
			// revert back to original message form
			$('#message-form').show();
		});
});


/* Use JS to display error messages if user isn’t selected or message field is empty.*/
//function userError() {
//	//(if no user is selected) {
//		//display error message
//	}
//}
//
//function messageError() {
//
//}


/* Add green bar to selected item on left column menu */

//function showSelected() {
//	//when user clicks on menu item in left column
//	//icon turns white
//	//display green bar next to selected icon
//}

/* Auto-Complete Member Search */

$('input[id="search"]').autoComplete({
	minChars: 1,
	source: function(term, suggest){
		term = term.toLowerCase();
		var choices = ['Bucky Bibbler', 'Abraham Lincoln', 'Sheri Berry', 'Joan Pennington', 'Hillary Clinton', 'Erik Estrada', 'Jacob Jacobson', 'Weird Al Yankovich', 'Mickey Mouse', 'John Boy', 'Babe Ruth', 'Dolly Parton', 'Scout Finch'];
		var matches = [];
		for (i=0; i<choices.length; i++)
			if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
		suggest(matches);
	}
});
