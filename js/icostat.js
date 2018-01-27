"use strict";

var update_gauge = function() {
   $.post('/icostats', function(data){
      $('#tokens_gauge').css('width', data.percent+'%');
      $('#tokens_gauge').attr('aria-valuenow', data.percent);
      $('#tokens_qty').html(data.tokens);
   });
}

var update 	= setInterval(update_gauge, 60000);
update_gauge();
