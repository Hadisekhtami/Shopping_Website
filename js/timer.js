
// Set the date we're counting down to
var countDownDate = new Date("July 16, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   var z=document.getElementsByClassName("demos");
   for( var i=0; i<z.length; i++)
   {
    z[i].innerHTML=
    '<span id="day">' + days+'</span>'+
    '<span id="hour">' + hours + '</span>'+
    '<span id="minute">' + minutes +'</span>'+
    '<span id="second">' + seconds + '</span>'
   }
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = '<span id="day">' + days + '</span>' + '<span id="hour">' + hours + '</span>'+'<span id="minute">' + minutes + '</span>'+'<span id="second">' + seconds + '</span>';
 

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    //  وقتی منقصی شد فصای خالی گذاشتیم که عدد منفی را نشون نده
  
    var a=document.getElementsByClassName("demos");
    for( var i=0; i<z.length; i++)
   {
    a[i].innerHTML="";
   }


    // document.getElementById("").setAttribute("id","offer-expire-text");
    var o=document.getElementsByClassName("after-expire");
    for( var i=0; i<z.length; i++)
    {
     o[i].classList.add("offer-expire-text");
    }
 

    var t=document.getElementsByClassName("offer-expire-text-inner");
    for( var i=0; i<z.length; i++)
   {
    t[i].innerHTML=" پیشنهاد ویژه این محصول به پایان رسیده";
   }


    var b=document.getElementsByClassName("offer-blur");
    for( var i=0; i<z.length; i++)
    {
    b[i].style.filter="blur(2px)";
    }
  }
}, 1000);

