'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('select#categories').on('change', toggleNewCate);
}

function toggleNewCate(e) {
    var selected_val = $( "select#categories option:selected" ).val();
    console.log(selected_val);
    var new_cate = $(".container.top_info").find(".new_cate"); 
    // console.log(new_cate);
    if(selected_val == "-1") {
        if(new_cate.length == 0) {
            var new_cate_lab = '<label for="new_cate">New Category</label>';
            var new_cate_input = '<input type="text" id="new_cate" name="new_cate_input" required>';
            var new_all = '<div class="new_cate" style="width: 100%; height: fit-content;">' +
                new_cate_lab + 
                new_cate_input +
            '</div>';
            $(new_all).hide().insertAfter("select#categories").fadeIn(600, function() {
                console.log($(new_cate_input));
                $("input#new_cate").focus();
                // .attr("placeholder", "yes");
            });
        }
    }else{
        if(new_cate.length != 0) {
            $(new_cate).fadeOut(200, function() {
                $(this).remove();
            });
        }
    }
    e.preventDefault();
    // alert("Selected Option Value: " + selected_val);
}
