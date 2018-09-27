/*
CLASSIC FOR LOOPS
*/

//Loop Variations
//for statement
//do while statement
//while statement
//labeled statement
//break statement
//continue statement
//for in statement
//for of statement

//counts from 0-9 by 1
for (let i = 0; i <10; i++) {
    console.log(i);
}

//counts from 0-20 by 2
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

//counts from 10 to 0 by 1
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//counts from 0 to -24 by 2
for (let i = 0; i >= -24; i -= 2) {
    console.log(i);
}

//go through a string and display each letter
//individually
let name = "Harambe";
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

let x = 0;
for (let i = 0; i <= 50; i++) {
    x = x + i;
}
console.log(x);