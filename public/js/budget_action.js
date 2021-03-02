'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // initBudgetForm();
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

}

        // $("#input"+cate_name).css({
        //     "padding-left": "20px"
        // });
        // $(prev_div + ":focus-within::before").css({
        //     "content": "$",
        //     "fontSize": "20px",
        //     "position": "absolute"
        // });

function initBudgetForm() {

}

