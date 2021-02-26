/* variables
var countBurger = 10;
var toFeed = document.getElementById("feedBurger");
var test = document.getElementById("overview");

//functions
// countBurger -= 1;
window.onload=function(){
toFeed.addEventListener("click", reduceBurger);
}

function reduceBurger(){
	countBurger -= 1;
}
*/




'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
 initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('select#categories').on('change', );
}

function feed(e) {
   
}