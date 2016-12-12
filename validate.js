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

		if (fullName.length < 3){
			console.log("Your name is too short");
			$(".full-name-error").show();			
		}else{
			$(".full-name-error").hide();			
		}

		$("input").each(function(){
			var currentTagClass = $(this).attr("class");
			var errorClass = "." + currentTagClass + "-error"; //builidnig  a string thtat is going to contain all the ones that are not filled 0out
			if ($(this).val() == ""){
				$(errorClass).html("Fields cannot be empty");
				$(errorClass).show();
			}else{
				$(errorClass).hide();
			}

		})


		//check to see if the password is correct and are at least 6 characters
		//also make sure they contain at least one number 


		//get both passwords 
		var password = $(".password").val(); 
		console.log(password);

		var password2 = $(".password2").val();
		console.log(password2)

		var numberFound = false;
		for(let i = 0; i < password.length; i++){
			if(isNaN(password[i]) === true){
			
			}else{
				numberFound = true;
			}
		}

		var spaceForPasswordError = $(".password-error");


		//check to see if they match 
		if(password != password2){
			spaceForPasswordError.html("Passwords do not match");
			spaceForPasswordError.show();
		}else if(password.length < 6){
			spaceForPasswordError.html("Your password must be at least 6 characters");
			spaceForPasswordError.show();
		}else if(!numberFound){
			spaceForPasswordError.html("Your password is weak, consider adding a number");
			spaceForPasswordError.removeClass("error");
			spaceForPasswordError.addClass("caution");
			spaceForPasswordError.show();
		}

// //($".square").click(function(){
// 	markSquare(this);
// })



	})
})