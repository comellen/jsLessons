//Iterating
let food = ["avocados", "steak", "almonds", "goat cheese", "kale"];


food.forEach(f => {console.log(f)});


food.forEach((food, number) => {
    console.log(food);
    console.log(number);
})

let movies = ["The Witch", "Ex Machina", "Princess Mononoke", "Sunshine"];

movies.forEach(m => {console.log(m)});
movies.push("Ninja Blade");
movies.splice(3, 1, "Tommy Boy");
movies.forEach(m => {console.log(m)});

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);
})
console.log(newArray);
