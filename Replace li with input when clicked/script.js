
	//Styling the body of our HTML DOM using style object's properties
document.body.style.backgroundColor='lightpink';
document.body.style.color='maroon';
document.body.style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.margin='0';
document.body.style.padding=0;
document.body.style.height='96vh';


var input, input2, input3, input4, input5;		//Defining some Global Variables
var oldLi, oldLi2, oldLi3, oldLi4, oldLi5;		//These variables are to be used inside multiple functions

	//Grabbing 2nd div element from DOM
let div = document.getElementsByTagName('div')[1];

	//Adding multiple Event Listeners on div element. A particular function is defined to handle each Event
div.addEventListener('mouseenter', editableDiv);

div.addEventListener('click', editableDiv2);

div.addEventListener('mouseleave', toNormal);


		//When user moves his/her mouse inside div element, then this function handles the mouseenter event
function editableDiv() {
	div.style.width='16%';
	div.style.backgroundColor='lavender';
	div.style.border='4px solid azure';

}

	//When user clicks any li element inside div element, then this function handles the click event
function editableDiv2(e) {
	if(e.target==div.firstElementChild.children[0]) {
			//creating new input element of type='text'
		let inputElem = document.createElement("input");
		inputElem.type = "text";

			//appending newly created input element as a child of ul (parent) element inside div element
		input = div.firstElementChild.appendChild(inputElem);
			//grabbing li element of ul (parent) element inside div element
		oldLi = div.firstElementChild.children[0];

			//replacing old li element with newly created input element inside ul (parent) element inside div element
		oldLi.replaceWith(input);

		input.focus();			//putting cursor inside input element, seems like it is in an active state
		input.value=oldLi.innerText;	//grabbing the value of old li element & putting it inside new input element
		input.style.border='none';
		input.style.outline='none';		//styling newly created input element tag
		input.style.borderRadius='4px';

	}
	else if(e.target==div.firstElementChild.children[1]) {
		let inputElem2 = document.createElement("input");
		inputElem2.type = "text";

		input2 = div.firstElementChild.appendChild(inputElem2);
		oldLi2 = div.firstElementChild.children[1];
		oldLi2.replaceWith(input2);

		input2.focus();
		input2.value=oldLi2.innerText;
		input2.style.border='none';
		input2.style.outline='none';
		input2.style.borderRadius='4px';

	}
	else if(e.target==div.firstElementChild.children[2]) {
		let inputElem3 = document.createElement("input");
		inputElem3.type = "text";

		input3 = div.firstElementChild.appendChild(inputElem3);
		oldLi3 = div.firstElementChild.children[2];
		oldLi3.replaceWith(input3);

		input3.focus();
		input3.value=oldLi3.innerText;
		input3.style.border='none';
		input3.style.outline='none';
		input3.style.borderRadius='4px';

	}
	else if(e.target==div.firstElementChild.children[3]) {
		let inputElem4 = document.createElement("input");
		inputElem4.type = "text";

		input4 = div.firstElementChild.appendChild(inputElem4);
		oldLi4 = div.firstElementChild.children[3];
		oldLi4.replaceWith(input4);

		input4.focus();
		input4.value=oldLi4.innerText;
		input4.style.border='none';
		input4.style.outline='none';
		input4.style.borderRadius='4px';

	}
	else if(e.target==div.firstElementChild.children[4]) {
		let inputElem5 = document.createElement("input");
		inputElem5.type = "text";

		input5 = div.firstElementChild.appendChild(inputElem5);
		oldLi5 = div.firstElementChild.children[4];
		oldLi5.replaceWith(input5);

		input5.focus();
		input5.value=oldLi5.innerText;
		input5.style.border='none';
		input5.style.outline='none';
		input5.style.borderRadius='4px';	

	}
}


		//When user moves his/her mouse away from div element, then this function handles the mouseleave event
function toNormal() {
	div.style.backgroundColor='lightpink';
	div.style.border='none';

}


