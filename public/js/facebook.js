function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

function statusChangeCallback(response) {
	console.log('Facebook login status changed.');
	console.log(response);

	// The response object is returned with a status field that lets the
	// app know the current login status of the person.
	// Full docs on the response object can be found in the documentation
	// for FB.getLoginStatus().
	if (response.status === 'connected') {
		// Logged into your app and Facebook.
		console.log('Successfully logged in with Facebook');
		FB.api('/me', changeUser);
	}
	// ?fields=name, first_name, picture.width(480)
}

function changeUser(response) {
	console.log("changeUser");
	$.post("login_profile",
		{"profile-url": response.picture.data.url},
		postLogin);
	window.location = './home';
}

function postLogin() {
	alert("postLogin");
}

// function changeUser(response) {
//     $(".facebookLogin p").hide();
//     $("h1#name").text(response.name);
//     $("img#photo").attr('src', response.picture.data.url);
// }

/* response */
// {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }

