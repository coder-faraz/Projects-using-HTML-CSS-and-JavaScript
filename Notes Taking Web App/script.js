
document.body.style.backgroundColor='lightpink';
document.body.style.color='maroon';
document.body.style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.margin='0';
document.body.style.padding=0;


let digitClock = document.getElementById("digitClock");

digitClock.style.width="9%";
digitClock.style.height="6%";
digitClock.style.backgroundColor="#B2FFFF";
digitClock.style.color="maroon";
digitClock.style.fontSize="18px";
digitClock.style.fontWeight="700";
digitClock.style.position="absolute";
digitClock.style.top="70px";
digitClock.style.left="1220px";
digitClock.style.borderRadius="8px";
digitClock.style.padding="6px";


function currentTime() {
	let date = new Date(); 		//Storing current date & time in a variable called date using constructor & new keyword

	let hh = date.getHours();		//getting hours, minutes & seconds from variable (date) using required methods
	let mm = date.getMinutes();
	let ss = date.getSeconds();
	let session = "AM";			//this variable stores AM or PM Tag
  
	//the date.getHours() returns values between 0 & 23, but we are making 12 hours clock, so resetting 12 to 0
	if(hh === 0){
		hh = 12;
	}
	if(hh > 12){		//if hours are greater than 12, then minus hours from 12 to get 12 hour clock
		hh = hh - 12;
		session = "PM";		//setting session variable to 'PM', when hours are greater than 12
	 }

	 //From the above used methods we get single digit values as 7 or 8, but we want 07 or 08, for this we use ternary
	 hh = (hh < 10) ? "0" + hh : hh;	//operator or shorthand if else, (condition ? if true : if false);
	 mm = (mm < 10) ? "0" + mm : mm;
	 ss = (ss < 10) ? "0" + ss : ss;
	  
	let time = hh + ":" + mm + ":" + ss + " " + session;	//storing time in desired format in a variable called time
  
	digitClock.innerText = time;		//displaying the time inside div element created earlier, looks like digital clock

	//Date() object returns a static value, which must be updated & for that we use setInterval method
	let t = setInterval(function() {		//this method runs or calls a function, after a specified no.of milliseconds
		currentTime() 
	}, 1000);		//1000 ms = 1 second

}

	//calling our currentTime() function to display a digital clock inside our div element with id="digitClock"
currentTime();



	//If user adds a note by clicking on Add Note button, add it to the local storage
let addNoteBtn = document.getElementById('addNoteBtn');

	//Calling showNotes() function, so that after reloading webpage all our notes get shown
showNotes();


	//Adding an Event listener of 'click' on Add Note button
addNoteBtn.addEventListener('click', function(e) {

		//Grabbing input element where we type title of the note
	let addTitle = document.getElementById("addTitle");

		//Grabbing textarea element where we type content of the note
	let addTxt = document.getElementById('addTxt');

		//If there are already some notes then store them in notes variable
	let notes = localStorage.getItem("notes");

		//If notes variable is null, means there is nothing in localStorage then create notesObj array
	if(notes == null) {
		notesObj = [];		//I will store all my notes in this array, which will get created if no notes are to display
	}
	else {
		notesObj = JSON.parse(notes);	//If notes != null, then convert notes into array & store in notesObj array
	}


	let myObj = {		//Creating an Object which will store the title & text of each note
		title : addTitle.value,
		text : addTxt.value
	}


		//If someone clicks on addNoteBtn then I will update notesObj array with myObj object that contains title & text value  & update localStorage
	notesObj.push(myObj);

	localStorage.setItem("notes", JSON.stringify(notesObj));	//Converting notes from array to string because we must set items in localStorage in string only

	addTitle.value = "";	//This clears the content from input element, as we click addNoteBtn
	addTxt.value = "";		//After clicking on addNoteBtn, I want the textarea value to be cleared to type another

	showNotes();	//displays all your notes from localStorage
});


	//This function displays all notes on the page, after reading them from the localStorage, inside div element of id="notes"
function showNotes() {
	let notes = localStorage.getItem("notes");

	if(notes == null) {
		notesObj = [];		//Same as done in above function
	}
	else {
		notesObj = JSON.parse(notes);
	}

	let html = '';		//this variable holds html for creating new noteCard, which gets displayed under your notes

	let dateVar = new Date();	//this variable holds date & time to display as footer in each note card


	notesObj.forEach(function(element, index) {
		html += `
			<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title"> ${element.title}</h5>
					<p class="card-text"> ${element.text} </p>
					<button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary"> Delete Note</button>
					<button class="btn btn-primary" id='${index}' onclick=impNote(this.id)> Important </button>
					<footer style="color: grey; font-size: 12px; margin-left: 135px; margin-top: 6px"> ${dateVar.toDateString()} </footer>
				</div>
			</div>
			`
	});

	let notesElem = document.getElementById("notes"); 	//This is a div, under Your Notes heading, inside which all your notes will be seen

		//If length of notesObj array is 0, then a new note card will be generated
	if(notesObj.length != 0) {
		notesElem.innerHTML = html;		//previously defined html string, that contains html for creating a note-card
	}
	else {
		notesElem.innerHTML = `<b>Nothing To Show</b>`;		//If notesObj is 0, then display this message
	}
}


	//This function is called when user clicks on Delete Note button in our note card, created using html variable
	//function to delete a note, then update localStorage & display leftover notes to user
function deleteNote(index) {

		//console.log(`I am deleting note at index : ${index}`);
	let notes = localStorage.getItem("notes");

	if(notes == null) {
		notesObj = [];		//I will get all the notes stored in notesObj array
	}
	else {
		notesObj = JSON.parse(notes);
	}
	
	notesObj.splice(index, 1);		//Used to Add or Remove array elements

	localStorage.setItem("notes", JSON.stringify(notesObj));	//Updating localStorage, after deleting a note from notesObj array

	showNotes();	//Calling showNotes() function to display all notes after reading them from localStorage
}


	//This function is called when user clicks on Important button in our note card  & marks a note in red to show that it is important
function impNote(index) {

		//parameter index will tell you the index of notecard on which the important button is pressed & accordingly it will grab the note card
	let headingElem = document.getElementById("container").children[4].children[index].children[0].children[0];

	let impIcon = document.createElement("span");	//creating a new element  &  appending it as a child to heading element in our note card everytime,
	headingElem.appendChild(impIcon);				//whenever important button is clicked

	impIcon.style.width="15px";
	impIcon.style.height="15px";				//styling newly created span element to make it look like a red dot (telling this note is important)
	impIcon.style.backgroundColor="red";
	impIcon.style.borderRadius="12px";
	impIcon.style.float="right";

}



	//This is the id of our search input box inside form element in the navigation bar
let searchTxt = document.getElementById('searchTxt');

	//input event gets triggered when user types a letter in search box
searchTxt.addEventListener('input', function() {

		//store the value of search input box in this variable
	let inputVal = searchTxt.value.toLowerCase();		//As JS is Case-sensitive, so we do this, to precise our search
	//console.log("Input Event Triggered", inputVal);

		//grabing all elements with class='noteCard'
	let noteCards = document.getElementsByClassName('noteCard');

		//creating an array of all note cards & iterating it
	Array.from(noteCards).forEach(function(element) {
		//console.log(element);  Will give the div element & all its child, means all the note Cards

		let cardTxt = element.getElementsByClassName('card-text')[0].innerText;
		//console.log(cardTxt);	  Will give the innerText of each note card

			//if our Note Card(which is a string stored in localStorage) contains the value entered in search input box
		if(cardTxt.includes(inputVal)) {	//then display that element & hide the remaining elements
			element.style.display='block';
		}
		else {
			element.style.display="none";
		}
	});

});




