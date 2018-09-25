/*
TYPES
*/

//Booleans
let T = true;
console.log(T); //output -> true

let F = false;
console.log(F); //output -> false

//boolean can represent: true/false, on/off, yes/no

//Null
/*
Null = empty value (Not 0, not undefined. It's not anything. It's nothing.)

It is like an empty container. Nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

//Undefined
/*
undefined = no value assigned (not even an empty container)

undefined is not an error
*/

let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 999999999999999;
console.log(precise); // output -> 999999999999999

let rounded = 9999999999999999; 
console.log(rounded); //output -> 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); //output -> 0.30000000000000004

let num = 0.3;
console.log(num); //output -> 0.3

let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
/////////////////////(    2    +    1    ) /10
console.log(numbersAreHard); //output -> 0.3

//Strings
//strings = any value within quotes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//numbers vs strings
let first = 1050 + 100;
let second = "1050" + "100";
console.log(first, second)

console.log(typeof first);  //output -> number
console.log(typeof second); //output -> string

//What's going on here?
// + -> addition when given only numbers, concatenation when given strings

let third = 100 + "99";
console.log(third); //output -> 10099

//Challenge:
// Set 7 (or 8) variables:
// firstName
// lastName
// houseNumber
// aptNumber
// street
// city
// state
// zipcode

//Set each variable to its respective type.

//console.log your whole address

let firstName = "Connor";
let lastName = "Mellencamp";
let houseNumber = 1445;
let aptNumber = 209;
let street = "N Delaware St";
let city = "Indianapolis";
let state = "IN";
let zipcode = 46202;

console.log(firstName, lastName + ",", houseNumber, street, aptNumber + ",", city + ",", state, zipcode);

//Objects
/*
What is an object?

A containter that can hold multiple datatypes

denoted by {}
has keys and values, separated with a colon (color (key): 'blue' (value))
Each key separated with a comma
*/

let burritosNow = {
    size: "large",
    quantity: 4,
    now: true,
}

console.log(burritosNow);
console.log(typeof burritosNow);

//Arrays
/*
Arrays are great for lists

denoted by [square brackets]
have values separated by commas -> ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
*/
let burritos = ["large", 4, true];

console.log(burritos);
console.log(typeof burritos);