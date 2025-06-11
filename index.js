let fanStatus = "OFF";
  let fanSpeed = 0;
  let acTemp = 18;

  function updateDisplay() {
    document.getElementById('fanStatus').innerText = fanStatus;
    document.getElementById('acTemp').innerText = acTemp;
    document.getElementById('fanSpeed').innerText = fanSpeed;
  }

  function togglePower() {
    if (fanStatus === "OFF") {
      fanStatus = "ON";
      console.log('turned on');
    }
     else {
      fanStatus = "OFF";
      console.log('turned off');
      
    }
    updateDisplay();
  }

  function increaseTemp() {
    if (fanStatus === "ON" && acTemp < 29) {
      acTemp++;
      console.log(`acTemp is ${acTemp}`);
      updateDisplay();
    }
  }

  function decreaseTemp() {
    if (fanStatus === "ON" && acTemp > 18) {
      acTemp--;
      console.log(`acTemp is ${acTemp}`);
      updateDisplay();
    }
  }

  function changeFanSpeed() {
    if (fanStatus === "ON") {
      fanSpeed++;
      console.log(`fansped is ${fanSpeed}`);
      if (fanSpeed > 3) {
        fanSpeed = 1;
      }
      updateDisplay();
    }
  }

  // Initial display update
  updateDisplay();