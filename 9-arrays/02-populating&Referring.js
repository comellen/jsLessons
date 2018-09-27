/*
INTRO TO ARRAYS

have [] brackets
can hold multiple datatypes
great for listing
*/

//overview/calling
let students =["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Ryan", "Iesha"]];
//index values: 0       1           2       3     4   5     6

console.log(typeof students);  //object
console.log(students[2]);  //Rhys
console.log(students[6][0]);  //Ryan
console.log(`Hello ${students[6][1]}, you look nice today`);

let food = ["avocados", "steak", "almonds", "goat cheese", "kale"];

for (let f of food) {
    console.log(f);
}

food.push('sausage');  //appends sausage to the end of the array

food.splice(1, 1, 'chicken');  //first num: starting index, second num: number of things to remove, third value: replacement value
console.log(food);
food.splice(2, 0, 'butter');  //adds butter at index 2
console.log(food);

food.pop();  //removes last value in array