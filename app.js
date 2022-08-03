// Declaring a variable
// keyword identifier/VariableName = Name
// var firstName = "John"; // string
// let lastName = "Doe"; // string
// let age = 27; // number
// let isMarried = true; // boolean
// let children = ["Bright", "Simon", "Patrick"] 
// let other = {
//     favoriteColor: "Gold",
//     favoriteSport: "Soccer",
//     favoriteFruit: "Apple",
// }; // objects
// const fullName = firstName + " " +lastName; // concatenation
// const myself = `My name is ${firstName} ${lastName}`; // string interpolation
// console.log(fullName);
// console.log(myself);


// STRINGS
let sentence = "This is a story about John Doe in Blind Spot";
console.log(sentence.length); // to check lenght

console.log(sentence.split("John"));// for splitting
console.log(sentence.replace("John", "Patrick")); //for Replacing 

console.log(sentence.toUpperCase()); // for uppercase
console.log(sentence.toLowerCase()); // for lowercase
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("Spot"));
console.log(sentence.includes("hu"));


// Arrays
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
console.log(days.length);
// days = days.push("Friday"); // returns only the lenght
// days.push("Friday"); // returns the whole array
// console.log(days);
// console.log(days.pop());
// days.unshift("Sunday");
// console.log(days);
// console.log(days.shift());
console.log(days.indexOf("Wednesday"));
console.log(days[3]);
days[0] = "Sunday"; // this is used to change data in an array.
console.log(days);

//OBJECTS
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 27,
};

console.log(person.firstName);
console.log(["person.firstName"]);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));



