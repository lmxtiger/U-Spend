var expenses = require('../expenses.json');

function addToArray(objects, arr) {
    for (var cate in objects) {
        for(var item of objects[cate]) {
            arr.push(item);
        }
    }
    return arr;
}

function compareDate(item1, item2) {
    
}

exports.view = function(req, res){
    var all_expenses = [];
    all_expenses = addToArray(expenses['cates-expenses'], all_expenses);
    console.log("# of items: " + all_expenses.length);
    res.render('overHist', expenses);
};



// expenses['cates-expenses'].forEach(element => {
//     element.forEach(element => {

//     })
// });