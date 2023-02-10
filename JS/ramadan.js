

let oldDate = new Date("Mar 22, 2023 23:59:59").getTime();

// setInterval

// 1000 millsecond = 1 second

let myCounter = setInterval(() => {


  let newDate = new Date().getTime();

  // Difference

  let dateDiff = oldDate - newDate;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))

  // hours

  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

  // minutes
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))

  //seconds
  let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (days < 10) {
    document.querySelector(".days").innerHTML = `0${days}`;
  }
  if (hours < 10) {
    document.querySelector(".hours").innerHTML = `0${hours}`;
  }
  if (minutes < 10) {
    document.querySelector(".minutes").innerHTML = `0${minutes}`;
  }
  if (seconds < 10) {
    document.querySelector(".seconds").innerHTML = `0${seconds}`;
  }
}, 1000)