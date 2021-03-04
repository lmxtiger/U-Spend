'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
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


