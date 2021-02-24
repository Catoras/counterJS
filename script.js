const endPoint = "7 Apr 2022";

const daysV = document.getElementById("days");
const hoursV = document.getElementById("hours");
const minutesV = document.getElementById("minutes");
const secondsV = document.getElementById("seconds");
const message = document.getElementById("message");

function countdown() {
  const endDate = new Date(endPoint);
  const currentDate = new Date();
  const secondsDiff = (endDate - currentDate) / 1000;
  var days = Math.floor(secondsDiff / 60 / 60 / 24);
  if (days > 365) {
    days -= 365;
    message.innerHTML = "Time until our platzi subscription begins.";
  }
  const hours = setTimeFormat(Math.floor((secondsDiff / 60 / 60) % 24));
  const minutes = setTimeFormat(Math.floor((secondsDiff / 60) % 60));
  const seconds = setTimeFormat(Math.floor(secondsDiff % 60));

  daysV.innerHTML = days;
  hoursV.innerHTML = hours;
  minutesV.innerHTML = minutes;
  secondsV.innerHTML = seconds;
}
function setTimeFormat(time) {
  if (time < 10) return "0" + time;
  else return time;
}

countdown();
setInterval(countdown, 1000);
