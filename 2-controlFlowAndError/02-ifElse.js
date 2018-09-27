/*
IF ELSE
*/

weather = 75;

if (weather < 70) {
    console.log("Wear a jacket!")
} else {
    console.log("No jacket necessary.");
}

let name = "Connor";

if (name = "Connor") {
    console.log("Hello, my name is", name);
} else {
    console.log("Hello, what is your name?")
}

name = "cRaZy";

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}
console.log(capFirst(name));

name = 'tYlEr';

if (name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter)
} else {
    otherLetters = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters)
}

/*
ELSE IF
*/

let age = 26;

if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");    
} else if (age >= 18) {
    console.log("Yay! You can vote!");
} else {
    console.log("Sorry, you're too young to do anything.");
}
