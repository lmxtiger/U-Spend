'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initBudgetEdit();
    initBudgetNew();
    toggle_dropdown();
});

function toggle_dropdown() {
    $(window).click(function(e) {
        var target = $(e.target);
    	if (target.is("#dropbtn") || target.parent().is("#dropbtn") ) {
            $( "div.dropdown-content" ).slideToggle();
    	}else{
            $( "div.dropdown-content" ).slideUp();
        }   
    });
}

function initBudgetNew() {
    $(function() {
        var dialog = $( "div.new-dialog" ).dialog({
            autoOpen: false,
            modal: true,
            hide: {effect: "bounce", times: 1, distance: 1},
            show: {effect: "bounce", times: 1, distance: 1}
        });

        function postNewCate(budget, name) {
            alert("New Category created!");
            location.reload();
        }

        $('button#new-cate-btn').click(function() {
            $('div.new-dialog #new-name').focus();
            dialog.dialog('option', {
                'title': "New Category",
                'buttons': [
                    {
                        text: "Create",
                        click: function() {
                            var name = $( "div.new-dialog #new-name" ).val();
                            var budget = $( "div.new-dialog #new-budget" ).val();
                            if(name == "") {
                                alert("Please enter a valid category name!");
                                $( "div.new-dialog #new-name" ).focus();
                            }else{
                                if(budget == "") {
                                    $.post('CateNew', 
                                    {
                                        "cateName": name,
                                        "budget": 0
                                    }, postNewCate(budget, name));
                                    dialog.dialog( "close" );
                                }else if( parseFloat(budget) >= 10 && parseFloat(budget) <= 40000 ) {
                                    $.post('CateNew', 
                                    {
                                        "cateName": name,
                                        "budget": budget
                                    }, postNewCate(budget, name));
                                    dialog.dialog( "close" );
                                }else{
                                    alert("Please enter a valid budget or skip for now!");
                                    $( "div.new-dialog #new-name" ).val(name);
                                    $( "div.new-dialog #new-budget" ).val("");
                                    $( "div.new-dialog #new-budget" ).focus();
                                }
                            }
                        }
                    },
                    {
                        text: "CANCEL",
                        click: function() {
                            dialog.dialog( "close" );
                        }
                    }
                ]
            });
            dialog.dialog( "open" );
        });
    });
};

function initBudgetEdit() {
    $(function() {
        function setBudget(cateName) {
            var budget = $( "div.budget-dialog input" ).val();
            // postNewBudget(budget);
            $.post('budgetNew', 
            {
                "cateName": cateName,
                "budget": budget
            },
            postNewBudget);
            dialog.dialog( "close" );
        };

        function postNewBudget(budget, category) {
            // FAKE update UI
            $('#budget' + category).text("$" + budget);
            $('#budget' + category).css("color", "green");
            alert("Budget = $" + budget + " for Category = " + category + " successfully set!");
        }

        var dialog = $( "div.budget-dialog" ).dialog({
            autoOpen: false,
            modal: true,
            hide: {effect: "bounce", times: 1, distance: 1},
            show: {effect: "bounce", times: 1, distance: 1}
            // {effect: "slide", direction: "right"}
        });

        $(".each-budget img").click(function() {
            var cateName = $(this).attr('id').substring(3);
            var old_display_budget = $('#budget' + cateName).text();
            var input_old_val = old_display_budget == "Unset" ? "" : parseFloat(old_display_budget.substring(1));
            // Display old budget in the input box and set the blinking cursor after the text
            $( "div.budget-dialog input" ).focus().val(input_old_val);

            dialog.dialog('option', {
                'title': cateName,
                'buttons': [
                    {
                        text: "OK",
                        click: function() {
                            var budget = $( "div.budget-dialog input" ).val();
                            if(budget != "" && parseFloat(budget) >= 10 && parseFloat(budget) <= 40000) {
                                $.post('budgetNew', 
                                {
                                    "cateName": cateName,
                                    "budget": budget
                                }, postNewBudget(budget, cateName));
                                dialog.dialog( "close" );
                            }else{
                                alert("Please enter a valid budget!");
                                $( "div.budget-dialog input" ).val("");
                                $( "div.budget-dialog input" ).focus();
                            }
                        }
                    },
                    {
                        text: "CANCEL",
                        click: function() {
                            dialog.dialog( "close" );
                        }
                    }
                ]
            });
            dialog.dialog( "open" );
        });

    });
};

    // $(function() {
    //     function setBudget() {
    //         alert("yes!");
    //     }

    //     dialog = $( "#budget-dialog" ).dialog({
    //         autoOpen: false,
    //         height: 300,
    //         width: 200,
    //         modal: true,
    //         buttons: {
    //           "Set": setBudget,
    //           Cancel: function() {
    //             dialog.dialog( "close" );
    //           }
    //         }
    //     });

    //     $(".each-budget img").click(function() {
    //         dialog.dialog( "open" );
    //         // var prev_div = $(this).prev();
    //         // var old_budget = $(prev_div).text();
    //         // var budget_val = old_budget == "Unset" ? 10 : parseFloat(old_budget.substring(1));
    //         // console.log("new budget: " + budget_val);
    //         // var cate_name = $(prev_div).attr('id').substring(6);
    //         // console.log("cate_name: " + cate_name);
    //         // $(prev_div).html('');
    //         // $('<input></input>').attr(
    //         //     {
    //         //     'type': 'number',
    //         //     'step': "any",
    //         //     'name': 'input' + cate_name,
    //         //     'id': 'input' + cate_name,
    //         //     'placeholder': "$10 ~ $40k",
    //         //     "min": 10,
    //         //     "max": 40000,
    //         //     }).appendTo(prev_div);
    //         // $("#input"+cate_name).focus().val(budget_val);
    //     });
    // });


        // $("#input"+cate_name).css({
        //     "padding-left": "20px"
        // });
        // $(prev_div + ":focus-within::before").css({
        //     "content": "$",
        //     "fontSize": "20px",
        //     "position": "absolute"
        // });


