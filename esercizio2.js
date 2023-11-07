window.addEventListener("DOMContentLoaded", function () {
  counterUpdate();
});
function counterUpdate() {
  const myTimer = document.getElementById("timer");
  let prevCounter = sessionStorage.getItem("counter");

  if (prevCounter) {
    let counter = JSON.parse(prevCounter);
    setInterval(() => {
      counter++;
      myTimer.innerText = counter;
      sessionStorage.setItem("counter", counter);
    }, 1000);
  } else {
    prevCounter = 0;
    setInterval(() => {
      prevCounter++;
      myTimer.innerText = prevCounter;
      sessionStorage.setItem("counter", prevCounter);
    }, 1000);
  }
}
