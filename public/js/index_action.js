'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	// initForm();
})

/*
 * Function that is called when the document is ready.
 */
function initForm() {
	var accounts;
	$.get("/accounts", function(data) {
		console.log("index_action get");
		accounts = data;
	});
    console.log("index_action");
	// console.log(accounts);

    $("#login").on("submit", function(e) {
        e.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();
        if(! accounts.hasOwnProperty(username) ) {
            alert("Username doesn't exist!");
            $("#username").focus();
        }else if(accounts[username].password !== password) {
            alert("Wrong password!");
            $("#password").focus();
        }else{
            var login_account = {"username": username};
            $.post("/loginAccount", login_account, function() {
                $(location).attr('href', "./home");
				alert("Login success!");
            });
        }
    });
    // $("#register").on("submit", function(e) {
	// 	e.preventDefault();
	// 	var username = $("#username").val();
	// 	var password = $("#password").val();
	// 	var conf_pw = $("#conf-pw").val();
	// 	var petName = $("#petName").val();
	// 	petName = (petName === "") ? "Foxy Doggy" : petName;
	// 	if(password !== conf_pw) {
	// 		alert("Please confirm your password!");
	// 	}else if(jQuery.inArray(username, usernames) != -1) {
	// 		alert("Username already in use!");
	// 	}else{
	// 		var new_account = {
	// 			username: username,
	// 			password: password,
	// 			petName: petName
	// 		};
	// 		$.post("/newAccount", new_account, function() {
	// 			$(location).attr('href', "./home");
	// 			alert("Registration success!");
	// 		});
	// 	}
	// });
};

