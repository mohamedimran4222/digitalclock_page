function showtime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var time = hours + ":" + minutes + ":" + seconds + session;
  document.getElementById("myclock").innerHTML = time;
  setTimeout(showtime, 1000);
}
showtime();
