var countDownDate = new Date();
countDownDate.setHours(24,0,0,0);

var countdown = document.getElementById("tiles");
var x = setInterval(function() {


var now = new Date().getTime();

var gap = countDownDate - now;


var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

var seconds = Math.floor((gap % (1000 * 60)) / 1000);


  countdown.innerHTML = "<span>" + hours + "</span>" + "<p>" + ":" + "</p><span>" + minutes + "</span>" + "<p>" + ":" + "</p><span>" + seconds + "</span>"; 


if (gap < 0) {

   clearInterval(x);

    document.getElementById("demo").innerHTML = "EXPIRED";

  }

}, 1000);