$(document).ready(function(){

	// Two new jquery methods
	// -submit
	// -val method

	$(".sign-up-form").submit(function(){
		// loop through the signup form class and check to see if they have submitted anything
		event.preventDefault(); //don't go to the next page
		console.log("Form submitted!");
		console.log(event);

		var fullName = $(".fullName").val()//exclusive to input tags
		console.log(fullName);

		var password = $(".password").val(); 
		console.log(password);


	})
})