let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);
	// Gets the current date/time and the data-time in seconds is passed to our display and end time Fn's
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
	// setInterval Fn saved to a var so we can clear it at 0
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop the timer
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// Determines the time remaining and sets the textContent to display that time - passed to the timer Fn
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

// Determines the end time and sets the textContent to display that time - passed to the timer Fn
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
	//takes the time in seconds from the dataset clicked
	const seconds = parseInt(this.dataset.time);
	//initializes the timer Fn
	timer(seconds);
	
	//conditional statement to swap images given the particular time selected
	const switchImg = document.querySelector('#switchImg');
	if (seconds === 3600) {
		switchImg.setAttribute('src', 'assets/image-4.jpg');
	} else if (seconds === 1200) {
			switchImg.setAttribute('src', 'assets/image-5.jpg');
	} else if (seconds === 2700) {
		switchImg.setAttribute('src', 'assets/image-2.jpg');
  } else if (seconds === 300) {
  	switchImg.setAttribute('src', 'assets/image-3.jpeg')
	}
}

//event listener on each button to trigger the startTimer Fn
buttons.forEach(button => button.addEventListener('click', startTimer));


