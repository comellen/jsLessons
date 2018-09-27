/*
FOR IN LOOPS

Great for iterating over values in an object
*/

let student = {
    name: "Connor",
    hungry: true,
    degree: "JavaScript",
    week: 1,}
for (let item in student) {
    console.log(item);
    console.log(student[item]);
}


let catArray = ["tabby", "british shorthar", "burmese", "maine coon"];
for (cat in catArray) {
    console.log(catArray[cat]);
}


let name = "connor";
let capName = "";
for (let ch in name) {
    if (ch == 0) {
        capName = name[ch].toUpperCase();
    } else {
        capName = capName + name[ch].toLowerCase();
    }
    console.log(capName);
}
