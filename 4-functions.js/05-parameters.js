/*
Parameters

parameters are like empty storage boxes that can have any name
*/

function pet(animal) {
    console.log(`I have a ${animal} for a pet.`);
}

pet("cat");

/////////Challenge//////////

function introduction(fName, lName) {
    let fullName = `${fName}` + ` ` +  `${lName}`;
    console.log(`Hello, my name is ${fullName}`);
}
introduction("Connor", "Mellencamp");