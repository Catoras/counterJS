const endPoint = "1 Mar 2022";
const daysV = document.getElementById("days");
const hoursV = document.getElementById("hours");
const minutesV = document.getElementById("minutes");
const secondsV = document.getElementById("seconds");

function countdown() {
  const endDate = new Date(endPoint);
  const currentDate = new Date();
  const secondsDiff = (endDate - currentDate) / 1000;
  const days = setTimeFormat(Math.floor(secondsDiff / 60 / 60 / 24));
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
