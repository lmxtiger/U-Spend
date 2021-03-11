'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    toggle_dropdown();
    showNoExpenseNote();
});

function showNoExpenseNote() {
    if( $("div.each-item").length == 0 ) {
        $("#no-expense").css("display", "block");
    }else{
        $("#no-expense").css("display", "none");
    }
}

function toggle_dropdown() {
    // $( "#dropbtn" ).click(function() {
    //     console.log("Clicked");
    //     $( "div.dropdown-content" ).slideToggle();
    // });

    $(window).click(function(e) {
        var target = $(e.target);
    	if (target.is("#dropbtn") || target.parent().is("#dropbtn") ) {
            $( "div.dropdown-content" ).slideToggle();
    	}else{
            $( "div.dropdown-content" ).slideUp();
        }   
    });
}