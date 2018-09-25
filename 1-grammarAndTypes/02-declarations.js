/*
VARIABLES

Notes on variables
1) A variable must begin with a letter, underscore, or dollar sign
2) Numbers may be used, but only following one of the above characters
3) JavaScript is case-sensitive. "hello" and "Hello" are different
*/

var a = 1;
var b = 2;
console.log(a + b);

/*
DECLARATIONS

Declarations are the LEFT SIDE of a variable
    It is simply the "var x"
    It is on the left sign of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
    Set the value of the variable
    Includes the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

var x;
console.log("Declaration:", x);

x = 10;
console.log("Initialization 1:", x);

x = 33;
console.log("Initialization 2:", x);

/*
Var, Let, and Const:
var = "old" JS keyword for variables
let = "new" keyword for variables (introduced in ES6)
const = also "new"; declares unchangeable variables
*/

let today = "Great!";
const elevenFifty ="Wonderful!";
console.log(today, elevenFifty);

today = "Lovely!";
console.log(today, elevenFifty);

let cup = "water";
cup = "air";
cup = "coffee";