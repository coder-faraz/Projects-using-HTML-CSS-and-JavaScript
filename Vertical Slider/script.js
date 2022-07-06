
const sliderContainer = document.querySelector('.slider-container')

const sliderLeft = document.querySelector('.slider-left')

const sliderRight = document.querySelector('.slider-right')

const btnUp = document.querySelector('.btn-up')

const btnDown = document.querySelector('.btn-down')

// grabbing length of our slides by selecting all the div elements in our slider-right not in the whole document, We will get 4 in this case
const slidesLength = sliderRight.querySelectorAll('div').length

let activeSlideIndex = 0;		// the slides are positioned to be on top of each other, so to check which index is in view


// to go 1 slide up, for our slides to move to correct position
sliderLeft.style.top=`-${(slidesLength - 1) * 100}vh`;


btnUp.addEventListener('click', () => changeSlide('up'))

btnDown.addEventListener('click', () => changeSlide('down'))



const changeSlide = (direction) => {
	// The clientHeight property returns the Height of an element in Pixels, including padding but not border or margin
	const sliderHeight = sliderContainer.clientHeight;

	if(direction === 'up') {		// === is a strict equality comparison operator. If we compare 2 === '2', result will be false
		activeSlideIndex++;
		if(activeSlideIndex > slidesLength - 1) {		// when we hit the end of slides, set activeSlideIndex to 0, to go back to the beginning
			activeSlideIndex = 0;
		}
	} else if(direction === 'down') {		// means, when we press down button, here activeSlideIndex will decrement, opposite to when we press UP button
		activeSlideIndex--;
		if(activeSlideIndex < 0) {				// when we are at the beginning, then go back to the last slide in the activeSlideIndex
			activeSlideIndex = slidesLength - 1;
		}
	}
	
	// to move right slide up we pass negative
	sliderRight.style.transform=`translateY(-${activeSlideIndex * sliderHeight}px)`;
	// left slide will move opposite to right slide, so we pass positive value, to make it go down
	sliderLeft.style.transform=`translateY(${activeSlideIndex * sliderHeight}px)`;

}



