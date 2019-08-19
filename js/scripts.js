$(document).ready(function() {
  $('#submit').click(function(event) {
    var items = ['item1', 'item2', 'item3', 'item4', 'item5'];

    items.map(function(items) {
    var groceryList = $('input#' + items).val();
    var finalList = groceryList.toUpperCase();
    $('ul').append(finalList);


    });
  });
});
