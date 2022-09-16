
document.body.style.backgroundColor='lightpink';
document.body.style.color='maroon';
document.body.style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.margin='0';			//styling the body of our webpage
document.body.style.padding=0;


function modifications(element) {

	element.style.fontSize='18px';
	element.style.fontWeight='700';
	element.style.color='maroon';
	element.style.background='none';
	element.style.border='3px solid maroon';
	element.style.borderRadius='8px';
	element.style.padding='8px';
	element.style.marginLeft='15px';
	element.style.cursor='pointer';
}


//Using a dictionary api to search for the meaning of a word entered in search input field by the user & populating it using button click event


	//grabbing button element by its id & styling it by passing it as function argument
let btn = document.getElementById("btn");
modifications(btn);


	//adding click event listener on the button element
btn.addEventListener('click', popHandler);



	//this function is called when click event is triggered
function popHandler() {

	const xhr = new XMLHttpRequest();		//instantiating new XMLHttpRequest object
	let uin = document.getElementById("uin");	//grabbing input element by its id

	let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + uin.value;	//adding input element's value to the url

	xhr.open("GET", url, true);		//calling xhr.open() & xhr.send() methods
	xhr.send();

		//xhr.onload is a callback function that says, what to do when response is ready
	xhr.onload = function() {

			//data we get from server will be in string format so, changing it into JSON object format
		const data = JSON.parse(this.responseText);
		console.log(data[0]);
		const definition = data[0].meanings[0].definitions[0].definition;	//traversing the object keys to get correct value(definition) of the searched word

		let list = document.getElementById("list");		//grabbing ul element by its id to populate its innerHTML
		list.innerHTML = `<li> Definition is : ${definition} </li>`;	//populating ul element with li element containing definition of the searched word

		setTimeout(function() {
			list.innerHTML = "";		//using setTimeout() to automatically clear li element of ul element & search input field after 10 seconds
			uin.value = "";
		}, 20000);
	}

}





