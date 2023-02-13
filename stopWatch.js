let timer = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let startedTime;
let elapsedTime;
let stoppedTime = 0;
let showedTime;
let timerID;

function start(){
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
  
  startedTime = Date.now();
  displayTime();
}

function stop(){
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  
  clearTimeout(timerID);
  stoppedTime += Date.now() - startedTime;
}

function reset(){
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  
  stoppedTime = 0;
  timer.textContent = "00:00:00.000";
}

function displayTime() {
  elapsedTime = new Date(Date.now() - startedTime + stoppedTime);
  const hours = String(elapsedTime.getHours()-9).padStart(2,"0");
  const minutes = String(elapsedTime.getMinutes()).padStart(2,"0");
  const seconds = String(elapsedTime.getSeconds()).padStart(2,"0");
  const milliseconds = String(elapsedTime.getMilliseconds()).padStart(3,"0");

  timer.textContent = hours+":"+minutes+":"+seconds+"."+milliseconds;
  timerID = setTimeout(displayTime, 10);
}