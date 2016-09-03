$(document).ready(function(){
  
  function startTime() {
    var today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds(), // var for countdown as shabbos approaches
        d = today.getDay();
    
    m = checkTime(m);
    s = checkTime(s); 
    
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
    
    switch(d){
      case 1:
        $("#current_day")
          .html("Monday")
          .css("font-weight","bold")
        $("#current_time").html( h + ":" + m )
        break;
      case 2:
        $("#current_day")
          .html("Tuesday")
          .css("font-weight","bold")
        $("#current_time").html( h + ":" + m )
        break;
      case 3:
        $("#current_day")
          .html("Wednesday")
          .css("font-weight","bold")
        $("#current_time").html( h + ":" + m )
        break;
      case 4:
        $("#current_day")
          .html("Thursday")
          .css("font-weight","bold")
        $("#current_time").html( h + ":" + m )
        break;
      case 5:
        $("#current_day")
          .html("Friday")
          .css("font-weight","bold")
        $("#current_time").html( h + ":" + m )
        break;
      case 6:
        $("#current_day")
          .html("Shabbat")
          .css("font-weight","bold")
        $("#current_time").html( h + ":" + m )
        break;
      case 7:
        $("#current_day")
          .html("Sunday")
          .css("font-weight","bold")
        $("#current_time").html( h + ":" + m )
        break;
      default:
        $("#current_day")
          .html("Unknown")
          .css("font-weight","bold")
        $("#current_time").html( h + ":" + m )
        break;
    }
    
    var t = setTimeout(startTime, 500);
  }startTime();
  
  $("#go-to-options").on("click", function() {
    window.open( chrome.runtime.getURL('options.html') )
  })
  
})