/*
Arrow Functions
*/

function coffee() {
    console.log("coffee rules.");
}

let tea = () => {
    console.log("tea is good.");
}

coffee();
tea();

let cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s).`);
}

cats(1, 0);

// Arrow Function Body Styles:

//concise
let apples = x => console.log(`There are ${x} apples.`);
apples(0);

//block
let avocados = (x) => {
    console.log(`There are ${x} avocados.`);
}
avocados(8);