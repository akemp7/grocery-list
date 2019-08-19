$(document).ready(function() {
  // $('#submit').click(function(event) {
    var numbers = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    var suits = ['hearts', 'spades', 'diamonds', 'clubs'];
    var deck = [];
    suits.forEach(function(suit) {
      numbers.forEach(function(number) {
        deck.push(number + " of " + suit);
        console.log(number + " of " + suit);
      });
    });




  });

  // });
// });

////////////////////Word Play/////////////////////////////
    // var sent = $("textarea#sentence").val();
    //
    // var test = [];
    // var sents = sent.split(' ');
    // sents.forEach(function(sent){
    //   test = sents.filter(word=>word.length>=3);
    //
    // });
    //
    // var reversing = test.reverse();
    // var newSentence= reversing.join();
    // alert(newSentence);
/////////////////////Grocery List///////////////////////////////
    // var items = ['item1', 'item2', 'item3', 'item4', 'item5'];
    //
    // items.map(function(items) {
    // var groceryList = $('input#' + items).val();
    // var finalList = groceryList.toUpperCase();
    // $('ul').append(finalList);



// });
