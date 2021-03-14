'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    toggle_dropdown();
    showNoExpenseNote();
    // setBGIMG();
});

function setBGIMG() {
    var cate = $("div.parent p.center").text();
    var preexisting_cates = ["Dining", "Clothings", "Study", "Fitness", "Electronics"];
    var img_url;
    if(jQuery.inArray(cate, preexisting_cates) == -1) {
        img_url = "../css/pics/cate-BGIMGs/Default.png";
    }else{
        img_url = "../css/pics/cate-BGIMGs/" + cate + ".png";
    }
    $(".container").css("background-image", "url(" + img_url + ")");
}

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