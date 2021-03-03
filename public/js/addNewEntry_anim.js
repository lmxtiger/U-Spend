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
    initEntryForm();
}

function initEntryForm() {
    $("#newEntryForm").submit(function(e) {
        var name_val, selected_val, cate_text, amt_val, rating_val, date_val;
        name_val = $("input#name").val();
        amt_val = $("input#amount").val();
        selected_val = $( "select#categories option:selected" ).val();
        if(selected_val == "-1") {
            cate_text = $(".container.top_info").find("input#new_cate").val(); 
        }else{
            cate_text = $( "select#categories option:selected" ).text();
        }
        var in_date = new Date();
        date_val = (in_date.getMonth()+1) + '/' + in_date.getDate() + '/' + in_date.getFullYear();
        rating_val = $( "input[name='rating']:checked" ).val();
    
        $.post('overHistNew', 
    
                {name_val: name_val,
                amt_val: amt_val,
                cate: [selected_val, cate_text],
                rating_val: rating_val,
                date_val: date_val},
    
                postSubmit);
        
        $(this).attr("action", "./cate/"+cate_text);
    });
   
    function postSubmit(res) {
        alert("New spending logged! YOU GET ONE BURGER!");
    }
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
}
