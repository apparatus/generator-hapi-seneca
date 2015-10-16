'use strict';

$(document).ready(function() {

  $('#example1').click(function() {
    $.get('/route1', function(result) {
      alert(JSON.stringify(result, null, 2));
    });
  });

  $('#example2').click(function() {
    $.get('/route2', function(result) {
      alert(JSON.stringify(result, null, 2));
    });
  });
});

