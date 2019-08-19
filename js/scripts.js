$(document).ready(function() {
  $('#submit').click(function(event) {
    var sent = $("textarea#sentence").val();

    var test = [];
    var sents = sent.split(' ');
    sents.forEach(function(sent){
      test = sents.filter(word=>word.length>=3);

    });

    var reversing = test.reverse();
    var newSentence= reversing.join();
    alert(newSentence);

    // var items = ['item1', 'item2', 'item3', 'item4', 'item5'];
    //
    // items.map(function(items) {
    // var groceryList = $('input#' + items).val();
    // var finalList = groceryList.toUpperCase();
    // $('ul').append(finalList);


    });
  });
// });
