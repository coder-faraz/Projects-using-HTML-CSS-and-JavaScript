
var startMenu = document.getElementsByClassName('startMenu')[0];
var start = document.getElementsByClassName('start')[0];


function startIcon() {						// This is a Toggle function, means if startMenu is 50px then make it -660px & vice-versa
	if(startMenu.style.bottom == '50px') {
		startMenu.style.bottom = '-660px';
	} else {
		startMenu.style.bottom = '50px';
	}
}


// Make a Modal box appear when clicking on File explorer icon in taskbar

var modalContent = document.getElementsByClassName('contentModal')[0];

function explorer() {
	if(modalContent.style.display == 'none') {
		modalContent.style.display='block';
	} else {
		modalContent.style.display='none';
	}
}


// Make a Modal box close when clicking on Cross icon in File Explorer Modal

var closeModal = document.getElementById('cross');

closeModal.addEventListener('click', ()=>{
	modalContent.style.display='none';
} )



// Create a focus on search input box when user clicks on search icon on taskbar 

var searchBox = document.getElementsByClassName('searchBox')[0];

function search() {
	searchBox.focus();
	searchBox.style.border='2px solid grey';
}






