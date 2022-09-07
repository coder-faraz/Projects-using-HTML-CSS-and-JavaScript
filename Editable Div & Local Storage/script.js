
document.body.style.backgroundColor='lightpink';
document.body.style.color='maroon';
document.body.style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.margin='0';
document.body.style.padding=0;



let newDiv = document.createElement('div');

	//This line will insert div element in the HTML DOM before the script element, otherwise div will get appended at the end of body (after script)
div = document.body.insertBefore(newDiv, document.body.children[1]);


div.style.width='26%';
div.style.height='26vh';
div.style.marginLeft='120px';
div.style.padding='10px';		//Styling our newly created div element tag
div.style.backgroundColor='lavender';
div.style.outline='none';
div.style.border='4px solid azure';
div.style.borderRadius='20px';



	//This event gets triggered when user moves his/her mouse inside div element
div.addEventListener('mouseenter', () => {
		//indicating that user has entered the div element
	div.style.border='4px solid cyan';
	div.setAttribute('contentEditable', 'true');	//As the user enters div element, he/she can click to start typing in the div element
});



	//This event gets triggered when user has completed typing inside div element & moves the mouse away from it
div.addEventListener('mouseout', () => {
		//indicating that user has moved away from the div element
	div.style.border='4px solid azure';
	localStorage.setItem('Value', div.innerHTML);	//As the user moves away from div element, store its contents to localStorage, to get it afterwards
});



	//This event gets triggered when the webpage is re-opened
window.addEventListener('load', function() {
		//When this event occurs, grab the contents of localStorage & show it inside div element
	div.innerHTML = localStorage.getItem('Value');
});


