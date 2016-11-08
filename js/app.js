/* Change class when buttons above traffic chart are clicked. */

// declare variables for traffic chart buttons
var hourly = $("#hourly-traffic");
var daily = $("#daily-traffic-button");
var weekly = $("#weekly-traffic");
var monthly = $("#monthly-traffic");
// declare array including all traffic chart buttons
var buttonArray = [hourly, daily, weekly, monthly];

// on click of a button
hourly.click(function() {
	// remove .active class from all buttons
	for (i = 0; i < buttonArray.length; i++) {
		buttonArray[i].removeClass("active");
	}

	// add .active class
	hourly.addClass("active");

});

// on click of a button
daily.click(function() {
	// remove .active class from all buttons
	for (i = 0; i < buttonArray.length; i++) {
		buttonArray[i].removeClass("active");
	}

	// add .active class
	daily.addClass("active");

});

// weekly
weekly.click(function() {
	// remove .active class from all buttons
	for (i = 0; i < buttonArray.length; i++) {
		buttonArray[i].removeClass("active");
	}

	// add .active class
	weekly.addClass("active");

});

// monthly
monthly.click(function() {
	// remove .active class from all buttons
	for (i = 0; i < buttonArray.length; i++) {
		buttonArray[i].removeClass("active");
	}

	// add .active class
	monthly.addClass("active");

});

/* Close alert message when X is clicked. */
$("#close-button").click(function() {
	$("#alert").fadeOut("slow");
	$("#alert-dot").fadeOut("slow");
});


/* Use JS to allow you to submit the form and display a confirmation the message was sent. You won't actually submit the form, just simulate the action using JavaScript.*/
function sendMessage() {
	var sendButton = document.getElementById("send-button");
//when user clicks send
// pop-up message
// text "Your message has been sent."
}


/* Use JS to display error messages if user isn’t selected or message field is empty.*/
//function errorMessage() {
//	//(if no user is selected || message field is empty) {
//		//display error message
//	}
//}


/* Add green bar to selected item on left column menu */

//function showSelected() {
//	//when user clicks on menu item in left column
//	//icon turns white
//	//display green bar next to selected icon
//}
