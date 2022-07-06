
// There is no sleep function in JavaScript due to its Asynchronous(doesn't happen at the same time) nature, so creating our sleep function using some logic
function sleep(milliseconds) {			// It works by using Date.now() method, to get the no.of ms that have elapsed since January 1 1970.
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();			// The loop will keep going while the difference b/w date & currentDate variables is less than the delay in ms
	} while(currentDate - date < milliseconds);
}



let screen = document.getElementById('screen');			// Grabbing the input element using its id, i.e. screen

let buttons = document.querySelectorAll('button');		// Grabbing all the buttons that we have inside our container

var screenValue = '';		// this is the default value inside our input element

var finished = false;		// this is a flag

for(item of buttons) {
	item.addEventListener('click', (e) => {			// for every item, add an Event Listener, that is click
		buttonText = e.target.innerText;		// e.target.innerHTML is saying, give the text written inside e.target (button that is clicked)
												// our input element will now have the value of buttonText (button that is clicked)
		if(buttonText == 'x') {
			buttonText = '*';			// changing x to *, otherwise eval() function will give error when parsing
			screenValue += buttonText;		// screenValue is a string variable, screen.value is the value of our input element
			screen.value = screenValue;		// change the value of input element to screenValue variable
		}
		else if(buttonText == 'C') {
			screenValue = '';			// this line is saying, clear the screen
			screen.value = screenValue;
		}
		else if(buttonText == '=') {
			screen.value = eval(screenValue);
		}
		else {
			screenValue += buttonText;
			screen.value = screenValue;
		}
	
	})
}


// eval() function - This method evaluates or executes an argument. If the argument is an expression, eval() evaluates the expression. It takes a String as it's
// parameter. If the parameter of eval() is not a string, it returns the parameter unchanged.   It is advised not to execute JavaScript from a string, so not to 
// use the eval() method. This method is slow & has security issues.

