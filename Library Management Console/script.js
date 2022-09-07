

var total;      total = 0;		//Global variable total, acting as a Flag variable

class Library{

    constructor(user) {		//constructor method taking user as an argument, that must be given when creating an object from this class
        this.name = user;		//this.name means, is object ka naam, is equal to whatever is given in argument when creating object from this class
		this.books = ["Rich Dad Poor Dad", "Money: Master The Game", "The Barefoot Investor", "The Intelligent Investor", "Think and Grow Rich", "The Little Book that Beats the Market", "The Automatic Millionaire", "Secrets of the Millionaire Mind", "The Millionaire Next Door"];
		this.issued = {};		//An object that will hold the bookname issued by the user & the username as name:value pair in dictionary
    }


    getBookList() {		//this function displays a list of all the books available in library using for() loop to iterate the books array

		for(let i=0; i<this.books.length; i++){		//If the issued book is equal to the bookname available in library, delete that book from array & continue
			if(this.issued[this.name] == this.books[i]) {
				delete this.books[i];
			}
			console.log(`${i + 1} : ${this.books[i]}`);		//This statement shows the index number and the bookname from this.books array
        };
    }


    issueBook() {		//this function asks the user to enter the book name from available books in library, then it checks if user input matches bookname
						//in the library, the book is issued
		console.clear();		//this function clears the console
		console.log("Total number of books available are as follows :");

		this.getBookList();		//above defined getBookList() function, when calling inside object, always use this keyword


        let uin = window.prompt("Enter the name of the book you want to issue : ");
        let datevar = new Date();		//storing todays date & time in datevar variable to also display book issue date to user

        for(let i=0; i<=this.books.length; i++){
            if(uin == this.books[i]) {		//if the book is available in the library, issue it to the user with date stamp
                console.log(`${this.books[i]} book is issued to ${this.name} on ${datevar.toDateString()}`);
				this.issued[this.name] = `${this.books[i]}`;		//the username & issued book name gets stored in this.issued object
                total++;		//increment the flag variable if the condition is true
			}
		}
		
        if(total == 0)		//if flag variable is not incremented, that means the book is not available, so print this line
            console.log(`${uin} book is not available`);
    }


	returnBook() {		//this function asks the user to enter the book name that he/she wants to return, then checks if the book name is correct, the book
						//is returned
		console.clear();		//this function clears the console
        let uin = window.prompt("Enter the name of the book you want to return : ");
        let datevar = new Date();		//storing todays date & time in datevar variable to also display the date on which user returned the book

		for(let j=0; j<=this.books.length; j++) {
            if(uin == this.books[j]) {		//if user input matches the bookname in the books array, return that book with a date stamp
                console.log(`${this.books[j]} book is returned by ${this.name} on ${datevar.toDateString()}`);
			}
		}

	}

}



	//asking username whenever he/she enters library & storing it in name variable
let name = window.prompt("Please enter your name to continue : ");


let obj1 = new Library(name);		//Creating an object from above defined Library class by giving name as its argument


while(1) {		//running an infinite while loop to run this program forever & will only end, if user wants to

	console.log(`Hello ${name}, Welcome to Stanford Library, Enter your choice from the list :
To get a list of all the books available in this library, press 1
To issue a book,                                          press 2
To return a book,                                         press 3
To exit from this program,                                press 4`);

	let inp = window.prompt("Enter your choice : ");

	if(Number(inp) == 1) {       //converting user input to number data type, because prompt accepts string input from the user
		obj1.getBookList();
	}
	else if(Number(inp) == 2) {
		obj1.issueBook();
	}
	else if(Number(inp) == 3) {
		obj1.returnBook();
	}
	else {
		console.log("Thank you for visiting Stanford Library, have a good day!");
		break;		//break keyword can only be used in if statement, when the statement is inside a loop & it breaks out of the loop
    }

}



