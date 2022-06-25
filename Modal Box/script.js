
var modal = document.getElementById('modal');	// grabbing 1st div element, that holds modal box


var btn = document.getElementById("button1");	// grabbing the button that when clicked will open our modal box
btn.addEventListener('click', ()=>{				// adding an event, that listens for a click on the button & displays the modal box
	modal.style.display="block";
})


var closeSign = document.getElementById('span1');	// grabbing close symbol(x) that when clicked will close our modal box
closeSign.addEventListener('click', ()=>{			// adding an event, that listens for a click & closes the modal box
	modal.style.display="none";
})



window.addEventListener('click', (e)=>{		// adding an event to the browser window, so that when we click outside of modal box, then also it closes
	if(e.target == modal){					// using event parameter(e) inside if, to check that our click target is modal, so close the modal box
		modal.style.display="none";
	}
})



function changeColor() {
	btn.style.backgroundColor="maroon";
	btn.style.color="darkblue";
	btn.style.boxShadow="0 8px 10px 0 rgba(86, 8, 24, 0.50)";
}


function toNormal() {
	btn.style.backgroundColor="";
	btn.style.color="";
	btn.style.boxShadow="";
}



function changeColor2() {
	closeSign.style.color="white";
	closeSign.style.cursor="pointer";
}


function toNormal2() {
	closeSign.style.color="";
	closeSign.style.cursor="";
}



var closeBtn = document.getElementById("button2");
closeBtn.addEventListener('click', ()=>{
	modal.style.display='none';
})


function changeColorF() {
	closeBtn.style.backgroundColor="darkblue";
	closeBtn.style.color="white";
	closeBtn.style.boxShadow="0 8px 10px 0 rgba(86, 8, 24, 0.50)";
}


function toNormalF() {
	closeBtn.style.backgroundColor="";
	closeBtn.style.color="";
	closeBtn.style.boxShadow="";
}





