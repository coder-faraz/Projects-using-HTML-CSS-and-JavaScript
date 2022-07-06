
let loadText = document.querySelector('.loading')
let bg = document.querySelector('.bg')


let load = 0;
let timing = setInterval(blurring, 30)		// setInterval() method repeates the execution of a given function at given time-interval




function blurring() {
	load++;

	if(load > 99) {
		clearInterval(timing)			// clearInterval() method stops the execution of function set by setInterval() method
		loadText.style.opacity='0';		// Remove the number showing % when it leads to 100% because, then the function will be over
	}

	loadText.innerText = `${load}%`;		// Whenever using pre-defined variable, put its name with $ sign inside curly braces {} followed by these(``) 
	bg.style.filter=`blur(${scale(load, 0, 100, 40, 0)}px)`;		// When load goes from 0 to 100, map blur level from 40 to 0
}


const scale = (num, in_min, in_max, out_min, out_max) => {		// Function to map a range of numbers to another range of numbers

	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min

}


