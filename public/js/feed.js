'use strict';

// var burger_num = require("../../feed.json");

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // initFeedGesture();
    $('div.overlay').on("click", function() {
        var num = $('strong').html();
        num = parseInt(num);
        console.log("num of burgers: " + num);
        num = Math.max(--num, 0);
        $('strong').html(num);
    })
}

function initFeedGesture() {
    $(function() {
        $('div.overlay').bind('taphold', tapholdHandler);

        function tapholdHandler(event) {
            var num = $('strong').html();
            num = parseInt(num);
            console.log("num of burgers: " + num);
            num = Math.max(--num, 0);
            $('strong').html(num);
		};
            // $.getJSON('feed.json', function (data) {
            //     console.log("tapholdHandler");
            //     data.burger_num = Math.max(data.burger_num - 1, 0);
            // })

            // request ur
            // $.ajax(   
            //     {   url: '/',
            //         data: {
            //             "clicked": true
            //         },
            //         success: function(data) {
            //             return data;
            //         }
            //     } 
            // );
    });
}