'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initForm();
	// resetAll();
});

// function resetAll() {
// 	$("button[type=button]").click(function(e) {
// 		$(" input[type=text], input[type=password] ").val("");
// 	});
// };

/*
 * Function that is called when the document is ready.
 */
function initForm() {
	var accounts;
	$.get("/accounts", function(data) {
		accounts = data;
	});
	console.log("signup_action");
	// console.log(accounts);
	// var usernames = [];
	// $.get("/accounts", function(data) {
	// 	data.forEach(account => usernames.push(account.username));
	// });
	// console.log(usernames);

    $("#register").on("submit", function(e) {
		e.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();
		var conf_pw = $("#conf-pw").val();
		var petName = $("#petName").val();
		petName = (petName === "") ? "Foxy Doggy" : petName;
		if(password !== conf_pw) {
			alert("Please confirm your password!");
			$("#conf-pw").focus();
		}else if(accounts.hasOwnProperty(username) ) {
			alert("Username already in use!");
			$("#username").focus();
		}else{
			var new_account = {
				username: username,
				password: password,
				petName: petName
			};
			$.post("/newAccount", new_account, function() {
				alert("Sign up success!");
			});
			$(location).attr('href', "./home");
		}
	});
}

// function initFeedGesture() {

//     $(function() {
//         $('div.overlay').bind('click', tapholdHandler);

//         function tapholdHandler(event) {
//            $.post("feed", {feed: 1}, updateCountUI);
// 		};

//         function updateCountUI(res) {
//             var str = $('strong').html();
//             var num = parseInt(str.split(' ')[1]);

//             var alertMSG = num>0 ? "Feeded!" : "Oops! You have no burger left!";
//             alert(alertMSG);
//             num = Math.max(--num, 0);
//             $('strong').html(": " + num);
//         }
//     });
// }

