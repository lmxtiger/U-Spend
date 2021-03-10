'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
    toggle_dropdown();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    initFeedGesture();
    showHintOnClick();
    // fakeFeed();
}

function showHintOnClick() {
    $('div.overlay').on("click", function() {
        $(this).css("opacity", 0.75);
    })
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

function initFeedGesture() {
    // Update database (feed.json data)
    $(function() {

        $('div.overlay').bind('doubletap', gestureHandler);

        function gestureHandler(event) {
            event.preventDefault();
            $.post("feed", {feed: 1}, updateCountUI);
		};
            // $.getJSON('feed.json', function (data) {
            //     console.log("gestureHandler");
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
            var str = $('#countBurger strong').html();
            var num = parseInt(str.split(' ')[1]);
            // console.log("num of burgers: " + num);
            var alertMSG = num>0 ? "Feeded!" : "Oops! You have no burger left!";
            alert(alertMSG);
            num = Math.max(--num, 0);
            $('#countBurger strong').html(": " + num);
            $("div.overlay").css("opacity", 0);
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