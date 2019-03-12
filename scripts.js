$(function() { //document ready begin

window.onload = function() {
	  let open = document.getElementById('open');
	  open.style.marginLeft = "25px"; //opening header slide in
	};

	$("h1, h3").fadeOut(2000);
	$("h1, h3").fadeIn(2000); // fade in and out header


	const $counter = $('span.counter')
	let currentInterval;

	function startTimer(duration, display) {
	    let timer = duration, minutes, seconds;
	    currentInterval = setInterval(function () {
	        minutes = parseInt(timer / 60, 10)
	        seconds = parseInt(timer % 60, 10);

	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        display.text(minutes + ":" + seconds);

	        if (--timer < 0) {
	            timer = duration;
	        }
	    }, 1000);
	}

	$(function() { // click functions to add/sub/start/stop and swap out images for work/lunch/break and party

		$('.countdown').on('click', function() {
			clearInterval(currentInterval);
			 const time = $(this).data('time');

			 if (time === 15) {
			 	$('#switchImg').attr('src','assets/image-3.jpg');
			 } else if (time === 30) {
			 	$('#switchImg').attr('src','assets/image-5.jpg');
			 } else if (time === 45) {
			 	$('#switchImg').attr('src','assets/image-2.jpg');
			 } else {
			 	$('#switchImg').attr('src','assets/image-4.jpg');
			 }

			 const countdownNumber = 60 * time;
			 display = $('#returnTime');
			 startTimer(countdownNumber, display);


		// $('#add').on('click', function() {
		// 	    	let add = 60 * 1;
		// 	        display = $('#returnTime');
		// 	    	startTimer(add, display);

		// }); // doesn't work with setInterval function :(

		// $('#subtract').on('click', function() {
		// 	    	let subtract = 60 * 1,
		// 	        display = $('#returnTime');
		// 	    	startTimer(subtract, display);
		
		// }); // doesn't work with the setInterval function
		 
		$('.party').on({
		     'click': function(){
		        $('#switchImg').attr('src','assets/image-4.jpg');
		        clearInterval(currentInterval);
		        $counter.text("Party all the time!");
		     }
		 });
		 

		$('#stop').on('click', function() {
			clearInterval(currentInterval);
		});	

		$('#start').on('click', function() {	
		 startTimer(countdownNumber, display);
			
		});	
	});	

});	

//Easily visible countdown timer

//Pseudocode steps:

//1 - Establish global variables for time increments

//2 - Find a way to add 00:00 (time) into span #returnTime

//3 - create a function(s) that increment the counter by the button clicked for - done

// 4 - clearInterval when timer reaches zero 

//Change image of studious dog when work time = 0 to break image of ross - done

//change image to party time image and queue music
//button classes: "lunch", "onBreak", "party", "work" - done

});	// document ready end