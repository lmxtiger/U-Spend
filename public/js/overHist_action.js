'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    toggle_dropdown();
    adjustCateProgBar();
    displayQMDialog();
});

function displayQMDialog() {
    $(function() {
        var dialog = $("div#dialog").dialog({
            autoOpen: false,
            modal: true,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        dialog.dialog( "close" );
                    }
                }
            ]
        });

        $("img#question-mark").click(function() {
            dialog.dialog("open");
        });
    });
};

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
};

function adjustCateProgBar() {
    $.get('./overHistProgBar', postGet);
};

function postGet(data) {
    $('.each-cate div.progress-bar').each(function() {
        var cateName  = $(this).prev("p").text();
        // console.log(data);
        var cateBudget = data[cateName].budget;
        if(cateBudget != false) {
            var cateSpent = data[cateName].spent;
            var inPercent = Math.min(100, (cateSpent / cateBudget) * 100 );
            // console.log(cateName + " inPercent: " + inPercent);
            $(this).width(inPercent + "%");
            if(inPercent === 100) {
                $(this).width("0px");
                $(this).parent().css("background-color", "red");
                // $(this).css(
                //     {"background-color": "red",
                //     "border-top-right-radius": "8px",
                //     "border-bottom-right-radius": "8px"}
                // );
            }
        }else{
            $(this).width("0px");
        }
    });
};