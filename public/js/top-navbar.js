'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // $("div.dropdown-content").hide();

    $( "button#dropbtn" ).click(function() {
        // var cur_display = $( "div.dropdown-content" ).css("display");
        // var set_display = cur_display == "none" ? "block" : "none";
        console.log("Clicked");
        $( "div.dropdown-content" ).toggle("slow");
    });
};

		/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
		// function myFunction() {
		// 	document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
		// }


