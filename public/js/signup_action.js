'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    
}

function initFeedGesture() {

    $(function() {
        $('div.overlay').bind('click', tapholdHandler);

        function tapholdHandler(event) {
           $.post("feed", {feed: 1}, updateCountUI);
		};

        function updateCountUI(res) {
            var str = $('strong').html();
            var num = parseInt(str.split(' ')[1]);

            var alertMSG = num>0 ? "Feeded!" : "Oops! You have no burger left!";
            alert(alertMSG);
            num = Math.max(--num, 0);
            $('strong').html(": " + num);
        }
    });
}

