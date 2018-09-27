/*
TERNARIES
*/

let x = 6;

(x > 0) ? console.log("x is greater than 0") : console.log("x is not greater than 0");

(x == 0) ? console.log("hello") : (x < 0) ? console.log("x is less than 0") : console.log("x is greater than 0");

/* Challenge:
Write a ternary that does the same thing as the age challenge

Age Challenge (if else):

var age = 30;

if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 18) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}
*/

let age = 26;

(age >= 25) ? console.log("Yay! You can rent a car!") 
: (age >=21) ? console.log("Yay! You can drink!") 
: (age >= 18) ? console.log("Yay! you can vote!") 
: console.log("Sorry, you're too young to do anything fun.");

let yep = -8;

(yep < 0 && yep > -10) ? console.log("yep is between 0 and -10") 
: (yep > 0) ? console.log("yep is greater than 0") 
: console.log("yep is less than 0");