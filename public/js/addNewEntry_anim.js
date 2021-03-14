'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    $('select#categories').on('change', toggleNewCate);
    initEntryForm();
    toggle_dropdown();
    displayQMDialog();
});

function initEntryForm() {
    $(function() {
        var exceedBudget;

        var dialog = $( "div#dialog" ).dialog({
            autoOpen: false,
            modal: true,
            height: "auto",
            width: 250,
            // hide: {effect: "bounce", times: 1, distance: 1},
            // show: {effect: "bounce", times: 1, distance: 1}
        });

        var dialog_warning = $( "div#dialog-warning" ).dialog({
            autoOpen: false,
            modal: true,
            height: "auto",
            width: 250,
        });

        $("button[value=Add]").click(function() {

            var name_val, selected_val, cate_text, amt_val, rating_val, date_val;

            name_val = $("input#name").val();
            amt_val = $("input#amount").val();
            rating_val = $( "input[name='rating']:checked" ).val();
            selected_val = $( "select#categories option:selected" ).val();
            if(selected_val == "-1") cate_text = $(".top_info").find("input#new_cate").val(); 
            else cate_text = $( "select#categories option:selected" ).text();
            // console.log(typeof(name_val) );
            // console.log(typeof(amt_val) );
            // console.log("rating: " + rating_val);

            if(name_val == "" || amt_val == "" || rating_val === undefined|| (selected_val == "-1" && cate_text == "") ) {
                alert("Please fill out all inputs!");
                return;
            }

            if(selected_val == "-1" && checkIsDuplicate(cate_text) ) {
                alert("Category \"" + cate_text + "\" already exists!");
                $(".top_info").find("input#new_cate").val("");
                $(".top_info").find("input#new_cate").focus();
                return false;
            }

            if(selected_val == "-1") exceedBudget = false;
            else $.get('./overHistProgBar', function(data) {
                postGet(data, cate_text, amt_val);
            });

            var in_date = new Date();
            date_val = (in_date.getMonth()+1) + '/' + in_date.getDate() + '/' + in_date.getFullYear();
        
            dialog.dialog("option", {
                "buttons": [
                    {
                        text: "YES",
                        click: function() {
                            dialog.dialog( "close" );
                            $(location).attr('href', "./cate/"+cate_text);
                        }
                    }
                ]
            });

            dialog_warning.dialog("option", {
                "buttons": [
                    {
                        text: "Yes I will",
                        click: function() {
                            dialog.dialog( "close" );
                            $(location).attr('href', "./cate/"+cate_text);
                        }
                    }
                ]
            });

            $.post('overHistNew', 
        
                    {name_val: name_val,
                    amt_val: amt_val,
                    cate: [selected_val, cate_text],
                    rating_val: rating_val,
                    date_val: date_val},
        
                    function(response) {
                        postSubmit(response, exceedBudget);
                    });
                    // .done(function() {
                    //     // dialog.dialog("open");
                    //     // $(location).attr('href', "./cate/"+cate_text);
                    // });
    
            // $(this).attr("action", "./cate/"+cate_text);
        });
    
        function postSubmit(response, exceedBudget) {
            if(exceedBudget) dialog_warning.dialog("open");
            else dialog.dialog("open");
        };

        function postGet(data, cate_text, amt_val) {
            var cateBudget = data[cate_text].budget;
            if(cateBudget == false) {
                exceedBudget = false;
                return;
            }
            var cateSpent = data[cate_text].spent;
            exceedBudget =  (cateSpent + parseFloat(amt_val) > cateBudget) ? true : false;
            console.log("exceedBudget: " + exceedBudget);
            return;
        };
    
        function checkIsDuplicate(newCateName) {
            // console.log("checkIsDuplicate");
            var duplicate = false;
            $('select#categories option[value!="-1"]').each(function() {
                if($(this).text() == newCateName) {
                    duplicate = true;
                    return false; // To break from the loop
                }
            });
            return duplicate;
        };
    });

}

function displayQMDialog() {
    $(function() {
        var dialog = $("div#dialog-rating").dialog({
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

function toggleNewCate(e) {
    var selected_val = $( "select#categories option:selected" ).val();
    // console.log(selected_val);
    var new_cate = $(".top_info").find(".new_cate"); 
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