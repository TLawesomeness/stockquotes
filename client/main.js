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
      $del.addClass('delDesign');

      var $div = $('<div>');
      $div.addClass('dataDesign');
      var display = $div.html('Name: ' + data.Name + '<br />' + 'Symbol: ' + data.Symbol + '<br />' + 'Quote: ' + data.LastPrice + '<br />' + 'Change: ' + data.Change);

      var upArrow = new Image();
      upArrow.src = 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/rounded-glossy-black-icons-arrows/009346-rounded-glossy-black-icon-arrows-arrow-up.png';
      var downArrow = new Image();
      downArrow.src= 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-arrows/007998-glossy-black-icon-arrows-arrow4-down.png';

      if (data.Change > 0) {
        // display = $div.html('Name: ' + data.Name + '<br />' + 'Symbol: ' + data.Symbol + '<br />' + 'Quote: ' + data.LastPrice + '<br />' + 'Change: ' + data.Change + upArrow);
        console.log('positive!');
      } else {
        // display = $div.html('Name: ' + data.Name + '<br />' + 'Symbol: ' + data.Symbol + '<br />' + 'Quote: ' + data.LastPrice + '<br />' + 'Change: ' + data.Change + downArrow);
        console.log('negative!');
      }

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
