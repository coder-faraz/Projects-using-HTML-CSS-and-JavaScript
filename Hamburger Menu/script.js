
var burger = document.getElementById('burger');

var navbar = document.getElementById('navbar');


function menu() {
	burger.classList.toggle('icon');		// When we click on burger, then On(Add) the class='icon' on burger element
	navbar.classList.toggle('change');
	if(navbar.style.display=='flex') {
		navbar.style.display='none';
	} else {
		navbar.style.display='flex';
	}

}

// classList.toggle() - The classList property returns the CSS classnames of an element. toggle() method is used to toggle (On/Off) class to an element.
