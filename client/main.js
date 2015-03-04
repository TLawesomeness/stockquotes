'use strict';

$(document).ready(function() {
  $('#getquotes').click(getData);
  // $('#delete').click(deleteData);
});

function getData() {
  var inputs = $('#text').val();
  var symbol = inputs;
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
  console.log(url);

  if (inputs === '' || isNaN(inputs) === false) {
    alert('Enter a valid input');
  } else {
    $.getJSON(url, function(data) {
      console.log('data:', data);

    var array = [];
    var $del = $('<input type="button" value = "Delete" />');
    var $div = $('<div>');
    $div.addClass('dataDesign');
    var display = $div.html('Name: ' + data.Name + '<br />' + 'Symbol: ' + data.Symbol + '<br />' + 'Quote: ' + data.LastPrice +'<br />' + 'Change: ' + data.Change);
    array.push(display);
    display.append($del);
    $('.showData').append(display);

    $del.click(function() {
      $(this).remove();
    })

  });
  }
};

// function deleteData() {
//   $('.dataDesign').remove();
// }
