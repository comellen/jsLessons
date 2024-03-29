/*
SCOPE

JavaScript has both LOCAL and GLOBAL scope
*/

var x = 12;

function scope() {
    var x = 33;
    console.log(x);
}
scope(); // output -> 33
console.log(x); // output -> 12

//
var x = 12;

function scope() {
    x = 33;
    console.log(x);
}
scope(); //output -> 33
console.log(x); //output -> 33

//the two expamples above are differenrt because the first example
//had 2 variables named x. the second example had just 1 variable
//named x in the global scope

var x = 12;

function scope() {
    var x =22;
    if (true) {
        var x = 45;
        console.log(x); //guess -> 45, actual -> 45
    }
    console.log(x); //guess -> 33, actual -> 45
}
scope();
console.log(x); //guess -> 12, actual ->12

//
let x = 12;

function scope() {
    let x = 33;
    if (true) {
        let x = 45;
        console.log(x); // output -> 45
    }
    console.log(x); // output -> 33
}
scope();
console.log(x); //output -> 12

//
function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
    if (true) {
        const scope = 3;
        console.log(scope);
    }
    console.log(scope);
}
constTest();

/*
    variable declar.   obeys functional scope    obeys block scope   can be mutated (changed after initialization)
    var                 x                         o                   x
    let                 x                         x                   x
    const               x                         x                   o
*/