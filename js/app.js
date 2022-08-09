const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
let ms = (hr = sec = min = "0" + 0),
  startTime;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");

  startTime = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }

    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }

    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }
    addValue();
  }, 10);
}

function stop() {
  startBtn.classList.remove("active");
  stopBtn.classList.add("stopActive");
  clearInterval(startTime);
}

function reset() {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTime);
  ms = hr = sec = min = "0" + 0;
  addValue( )
}

function addValue() {
  let milisecound = (document.querySelector(".milisecound").textContent = ms);
  let secound = (document.querySelector(".secound").textContent = sec);
  let minute = (document.querySelector(".minute").textContent = min);
  let hour = (document.querySelector(".hour").textContent = hr);
}