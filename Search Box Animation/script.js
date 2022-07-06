
let search = document.getElementsByClassName('search')[0];

let searchIcon = document.getElementsByClassName('searchIcon')[0];

let searchInput = document.getElementsByClassName('searchInput')[0];		// Grabbing all our svg shapes & input element

let searchClose = document.getElementsByClassName('searchClose')[0];

let searchDelete = document.getElementsByClassName('searchDelete')[0];


// When user clicks search icon, I want to add certain classes to certain elements  & create focus to input element
searchIcon.addEventListener('click', () => {
	searchInput.classList.add('openState');
	searchInput.focus();
	searchClose.classList.add('greyClose');
} )


// When user clicks close icon, I want to remove certain classes from certain elements  & clear the input field value
searchClose.addEventListener('click', () => {
	searchInput.classList.remove('openState');
	searchInput.value = '';
	searchClose.classList.remove('greyClose');
} )


searchDelete.addEventListener('click', () => {
	searchInput.value = '';
	searchInput.focus();
} )

