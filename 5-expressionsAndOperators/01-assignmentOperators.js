/*
Assignment Operators
*/

//assignment operator
let x = 5;
console.log(x);

x = x + 1;
console.log(x);

//addition operator
x += 1  //x = x + 1
console.log(x);

//subtraction operator
x -= 1  //x = x - 1
console.log(x);

//multiplicarion operator
x *= 1; //x = x * 1
console.log(x);

//division operator
x /= 1; //x = x / 1
console.log(x);

//modulus operator
console.log(7%5);  //output -> 2, remember that 7/5 = 1 & 2/5
console.log(x % 5);
x = x % 5;  //assign x to 1
x %= 5;  //the same as the above line

//exponential assignment
x = 5;
x = x ** 2;
x **= 1;
console.log(x);