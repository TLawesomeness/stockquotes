'use strict';

$(document).ready(function() {
  $('#getquotes').click(getData);
  // $('#delete').click(deleteData);
});

function getData() {
  var symbol = $('#text').val();

  var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
  console.log(url);

  if (!symbol || !isNaN(symbol)) {
    alert('Enter a valid input');
  } else {
    $.getJSON(url, function(data) {
      console.log('data:', data);

      var $del = $('<input type="button" value = "Delete" />');

      var $div = $('<div>');
      $div.addClass('dataDesign');
      var display = $div.html('Name: ' + data.Name + '<br />' + 'Symbol: ' + data.Symbol + '<br />' + 'Quote: ' + data.LastPrice + '<br />' + 'Change: ' + data.Change);

      display.append($del);
      $('.showData').append(display);

      $del.click(function() {
        $div.remove();
      });

    });
  }
}

// function deleteData() {
//   $('.dataDesign').remove();
// }
