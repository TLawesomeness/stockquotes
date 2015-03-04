'use strict';

$(document).ready(function() {
  $('#getquotes').click(getData);

});

function getData() {
  var inputs = $('#text').val();
  var symbol = inputs;
  var array = [];
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
  console.log(url);

  if (inputs === '' || isNaN(inputs) === false) {
    alert('Enter a valid input');
  } else {
    $.getJSON(url, function(data) {
      console.log('data:', data);

    var $div = $('<div>');
    $div.addClass('dataDesign');
    var display = $div.html('Name: ' + data.Name + '<br />' + 'Symbol: ' + data.Symbol + '<br />' + 'Quote: ' + data.LastPrice +'<br />' + 'Change: ' + data.Change);

    $('.showData').append(display);

  });
  }
};
