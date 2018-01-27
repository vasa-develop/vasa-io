"use strict";

//  Date("Sep 15, 2017 10:00:00 GMT")
var preIcoDate = 1505469600000;
//  Date("Oct 15, 2017 09:00:00 GMT")
//var icoDate = 1508058000000;
//  Date("Nov 15, 2017 09:00:00 GMT")
var icoDate = 1510747200000

var countdown = function() {
   var now 	= new Date().getTime();
   var distancePre = preIcoDate - now;
   var distanceIco = icoDate - now;
   var daysP    = 0,
       hoursP   = 0,
       minutesP = 0,
       secondsP = 0;
   var days    = 0,
       hours   = 0,
       minutes = 0,
       seconds = 0;

   if(distancePre > 0) {
      daysP    = zeroPad(Math.floor(distancePre / (1000 * 60 * 60 * 24)));
      hoursP   = zeroPad(Math.floor((distancePre % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      minutesP = zeroPad(Math.floor((distancePre % (1000 * 60 * 60) ) / (1000 * 60)));
      secondsP = zeroPad(Math.floor((distancePre % (1000 * 60) ) / 1000));
   }
   if(distanceIco > 0) {
      days    = zeroPad(Math.floor(distanceIco / (1000 * 60 * 60 * 24)));
      hours   = zeroPad(Math.floor((distanceIco % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      minutes = zeroPad(Math.floor((distanceIco % (1000 * 60 * 60) ) / (1000 * 60)));
      seconds = zeroPad(Math.floor((distanceIco % (1000 * 60) ) / 1000));
   }
   if( distancePre <= 0 && distanceIco <= 0 ) {
      clearInterval(update);
   }

   $("#ico-days-top").html(daysP);
   $("#ico-hours-top").html(hoursP);
   $("#ico-minutes-top").html(minutesP);
   $("#ico-seconds-top").html(secondsP);

   $("#ico-days-bottom").html(days);
   $("#ico-hours-bottom").html(hours);
   $("#ico-minutes-bottom").html(minutes);
   $("#ico-seconds-bottom").html(seconds);
};

function zeroPad( num ) {
   return ('00'+ num).substring(num.toString( ).length);
}

var update 	= setInterval(countdown, 1000);
countdown();
