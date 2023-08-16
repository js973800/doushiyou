function displayTime() {
    const currentTimeElement = document.getElementById("current-time");
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, "0");
    const minutes = String(currentTime.getMinutes()).padStart(2, "0");
    const timeString = hours + ":" + minutes;
    currentTimeElement.textContent = timeString;
  }
  
  setInterval(displayTime, 1000);
  displayTime();