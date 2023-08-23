let timerDisplay = document.querySelector(".timerDisplay");
let stopbtn = document.getElementById("stopbtn");
let start = document.getElementById("start");
let reset = document.getElementById("reset");

let milisec = 0;
let sec = 0;
let mins = 0;

let timerId = null;

start.addEventListener('click', function () {
  
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function () {
  clearInterval(timerId);
});

reset.addEventListener('click', function () {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00 : 00`;
}); 

function startTimer() {
    
  milisec++;
  if (milisec == 100) {
    milisec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      mins++;
    }
  }

  // tarika 1 by conditional statement
  let milisecString = milisec < 10 ? `0${milisec}` : milisec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minsString} : ${secString} : ${milisecString}`;
}
  // tarika 2 by if-else
  //     let milisecString;
  //     if(milisec<10){
  //         milisecString = `0${milisec}`;
  //     }
  //     else{
  //         milisecString = milisec;
  //     }

