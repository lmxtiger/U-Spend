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
    showDogGif();
    // fakeFeed();
}

function showHintOnClick() {
    $(document).click(function() {
        $("div.overlay").css("opacity", 0);
    });

    $('div.overlay').click(function(event) {
        $(this).css("opacity", 0.75);
        event.stopPropagation();
    });
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

function showDogGif() {
    var times_fed = $("div#times_fed").text();
    times_fed = parseInt(times_fed);
    if(times_fed >= 3) {
        $("img#pet_img").attr("src", "/css/pics/happyDog.gif");
    }else{
        $("img#pet_img").attr("src", "/css/pics/dog.gif");
    }
}

function initFeedGesture() {
    // Update database (feed.json data)
    $(function() {

        $('div.overlay').bind('doubletap', gestureHandler);

        function gestureHandler(event) {
            event.preventDefault();
            var str = $('#countBurger strong').html();
            var num = parseInt(str.split(' ')[1]);
            var no_burger_left = num > 0 ? false : true;
            $.post("feed", {feed: 1, no_burger: no_burger_left}, updateCountUI);
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
            var times_fed = $("div#times_fed").text();
            times_fed = parseInt(times_fed);
            var alertMSG;
            if(num > 0) {
                alertMSG = "Feeded!";
                $('#countBurger strong').html(": " + --num);
                $("div#times_fed").text(++times_fed);
                if(times_fed >= 3) {
                    $("img#pet_img").attr("src", "/css/pics/happyDog.gif");
                }
            }else{
                alertMSG = "Oops! You have no burger left!";
            }
            // alertMSG = num>0 ? "Feeded!" : "Oops! You have no burger left!";
            alert(alertMSG);
            // num = Math.max(--num, 0);
            // $('#countBurger strong').html(": " + num);
            $("div.overlay").css("opacity", 0);

            // var times_fed = $("div#times_fed").text();
            // times_fed = parseInt(times_fed);
            // $("div#times_fed").text(++times_fed);
            // if(times_fed >= 3) {
            //     $("img#pet_img").attr("src", "/css/pics/happyDog.gif");
            // }
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