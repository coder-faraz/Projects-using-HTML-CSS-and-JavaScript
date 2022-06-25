
    // Grab The Button that will be used to Scroll to Top of the document
var backToTop = document.getElementsByClassName('mi-36')[0];

// When the user clicks on the button, Scroll to the Top of the document
backToTop.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} )


