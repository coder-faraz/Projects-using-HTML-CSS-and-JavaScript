
let container = document.getElementById('container');

let img1 = document.getElementsByTagName('img')[0];

let img2 = document.getElementsByTagName('img')[1];

let img3 = document.getElementsByTagName('img')[2];

let img4 = document.getElementsByTagName('img')[3];

let btn = document.getElementById('btn');

let modalContainer = document.getElementById('modalContainer');


document.body.style.margin='0';
document.body.style.backgroundColor='lavender';


container.style.height='99.5%';
container.style.width='99.5%';
container.style.position='absolute';


img1.style.height='41vh';
img1.style.width='30%';
img1.style.position='relative';
img1.style.left='200px';
img1.style.top='30px';
img1.style.borderRadius='10px';
img1.style.cursor='pointer';



img2.style.height='41vh';
img2.style.width='30%';
img2.style.position='relative';
img2.style.left='290px';
img2.style.top='30px';
img2.style.borderRadius='10px';
img2.style.cursor='pointer';



img3.style.height='42vh';
img3.style.width='30%';
img3.style.position='relative';
img3.style.left='-120px';
img3.style.top='340px';
img3.style.borderRadius='10px';
img3.style.cursor='pointer';



img4.style.height='41vh';
img4.style.width='30%';
img4.style.position='relative';
img4.style.top='60px';
img4.style.left='200px';
img4.style.borderRadius='10px';
img4.style.cursor='pointer';



btn.style.color='azure';
btn.style.backgroundColor='#6F00FF';
btn.style.fontSize='18px';
btn.style.fontFamily='"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
btn.style.position='relative';
btn.style.left='750px';
btn.style.top='50px';
btn.style.border='none';
btn.style.borderRadius='8px';
btn.style.padding='12px';
btn.style.transitionDuration='0.4s';



function changeColor() {
	btn.style.backgroundColor='maroon';
	btn.style.cursor='pointer';
}


function toNormal() {
	btn.style.backgroundColor='#6F00FF';
}



function showLinks() {
	modalContainer.style.display='block';

	let allLinks = document.links;
	newArray = Array.from(allLinks);

	for(let i=0; i<newArray.length; i++) {
		let div = document.getElementById('modalBody');

		let para = document.createElement('p');		// Creating paragraph element for each link we get  &  appending it as a child of div element because of 
		div.appendChild(para);						// Parent-Child Relationship of DOM

		let pText = document.createTextNode(newArray[i]);	// Storing each (newArray[i]) link's text we get from the page in a textNode  & appending it as 
		para.appendChild(pText);							// a child of paragraph element tag
	}


		// This is a static way of dealing with 4 links on a page, not more or less
/*	for(let i=0; i<newArray.length; i++) {
		document.getElementsByTagName('p')[i].innerHTML = newArray[i];
	};		*/


	let div = document.getElementById('modalBody');

	let para = document.createElement('p');			// Creating another paragraph element, appending as child of div, creating textNode of p element to
	div.appendChild(para);							// store the length of all the links grabbed from the page

	let pText = document.createTextNode(`Length : ${allLinks.length}`);
	para.appendChild(pText);
	
	let pAttrib = document.createAttribute("id");	// Creating an Attribute ("id"),  setting its value to demo  &  setting it as AttributeNoded to p element
	pAttrib.value = 'demo';							// So that using it we can do some styling of our newly created paragraph element tag

	para.setAttributeNode(pAttrib);

	para.style.backgroundColor='#EEE8AA';
	para.style.fontWeight='700';			// to make our font bold
	para.style.fontStyle='italic';			// to make our font italic (slanting)
	para.style.width='14%';
	para.style.padding='2px 4px';

}


function crossClose() {
	modalContainer.style.display='none';
}




