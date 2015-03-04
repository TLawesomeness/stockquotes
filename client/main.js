'use strict';

$(document).ready(function() {
  $('#getquotes').click(getData);
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

      if (data.Change > 0) {
        display = $div.html('Name: ' + data.Name + '<br />' + 'Symbol: ' + data.Symbol + '<br />' + 'Quote: ' + data.LastPrice + '<br />' + 'Change: ' + data.Change + '<img src="http://www.novayariga-personal.ru/public/cms/img/icons/uparrow-green.png">');
        console.log('positive!');
      } else if (data.Change < 0) {
        display = $div.html('Name: ' + data.Name + '<br />' + 'Symbol: ' + data.Symbol + '<br />' + 'Quote: ' + data.LastPrice + '<br />' + 'Change: ' + data.Change + '<img src="http://www.cwealthadvisors.com.my/images%5Carrow_red_down.png">');
        console.log('negative!');
      } else {
        display = $div.html('Name: ' + data.Name + '<br />' + 'Symbol: ' + data.Symbol + '<br />' + 'Quote: ' + data.LastPrice + '<br />' + 'Change: ' + data.Change);
      }

      display.append($del);
      $('.showData').append(display);

      $del.click(function() {
        $div.remove();
      });

    });
  }
}
