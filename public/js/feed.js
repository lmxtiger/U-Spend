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
    initFeedGesture();
    // fakeFeed();
}

function initFeedGesture() {
    // Update database (feed.json data)
    $(function() {
        $('div.overlay').bind('click', tapholdHandler);

        function tapholdHandler(event) {
           $.post("feed", {feed: 1}, updateCountUI);
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
        function updateCountUI(res) {
            var str = $('strong').html();
            var num = parseInt(str.split(' ')[1]);
            // console.log("num of burgers: " + num);
            var alertMSG = num>0 ? "Feeded!" : "Oops! You have no burger left!";
            alert(alertMSG);
            num = Math.max(--num, 0);
            $('strong').html(": " + num);
        }
    });
}

function fakeFeed() {
    $('div.overlay').on("click", function() {
        var str = $('strong').html();
        var num = parseInt(str.split(' ')[1]);
        console.log("num of burgers: " + num);
        num = Math.max(--num, 0);
        $('strong').html(": " + num);
    })
}