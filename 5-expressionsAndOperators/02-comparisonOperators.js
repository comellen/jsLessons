/*
Comparison Operators
*/

//equality
console.log('3' == 3);  //true. type coercion, doesn't care about type
console.log ('three' == 3);  //false
console.log (0 == false);  //true. (0 == false == '' == null)

//strict equality -> checks value and type
console.log(3 === 3);
console.log(3 === '3');  //false

//not equal
console.log('3' != 4);  //true
console.log('4' != 4);  //false. doesn't care about type

//strict not equal -> checks value and type
console.log('3' !== 3);  //true

//greater than
console.log(3 > 2);  //true

//less than
console.log(2 < 3);  //true

//greather than or equal to
console.log(3 >= 3);  //true

//less than or equal to
console.log(4 <= 4);  //true

//And: returns true if the left and right are both true
console.log(true && true);  //true
let x = 5;
console.log(x < 10 && x > -5);  //true
console.log(x < 10 && x > 5);  //false

//Or: return true if the left OR right are true
console.log(true || false);  //true
console.log(x < 10 || x > 5);  //true

//tangent
let str = 'a';
console.log(str < 'p');  //true, alphabet positioning