let myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

let car = {
    name: "BMW",
    model: "X5",
    year: 2020,
    features: ["sunroof", "leather seats", "bluetooth"],
    start: function () {
        console.log("Car started");
    }

};

console.log(myObject.key1); // Accessing property using dot notation
console.log(myObject["key2"]); // Accessing property using bracket notation
console.log(car.features[1]); // Accessing array element within the object

car.start(); // Calling method of the object 

//object to json conversion
let jsonString = JSON.stringify(car);
console.log(jsonString);

//json to object conversion
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);



// Creating an Empty Array
let a = [];
console.log(a);

// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);

// Creating and Initializing an array with values
let c = new Array(10, 20, 30);

console.log(c);


// Creating an Array and Initializing with Values
let d = ["HTML", "CSS", "JS"];

// Accessing Array Elements 
console.log(d[0]);
console.log(d[1]);

// Accessing First Array Elements
let third = d[2];

console.log("third Item: ", third);

d.push("ReactJS"); // Adding an element to the end of the array
console.log(d);

d[1] = "Tailwind CSS"; // Modifying an element at index 1
console.log(d);

d.pop(); // Removing the last element of the array
console.log(d);

len = d.length; // Getting the length of the array
console.log("Length of d: ", len);

// Iterating through for loop
for (let i = 0; i < d.length; i++) {
    console.log(d[i])
}

d.forEach(function (item, index) {
    console.log(`Item at index ${index}: ${item}`);
});

// JavaScript Array Methods

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original Array: " + fruits);

fruits.sort(); // Sorts the array
console.log("Sorted Array: " + fruits);

fruits.reverse(); // Reverses the array
console.log("Reversed Array: " + fruits);

fruits.shift(); // Removes the first element
console.log("After Shift: " + fruits);

fruits.unshift("Pineapple"); // Adds a new element at the beginning
console.log("After Unshift: " + fruits);

fruits.splice(2, 0, "Kiwi", "Grapes"); // Adds new elements at index 2 
// (method) Array<string>.splice(start: number, deleteCount: number, ...items: string[]): string[] (+1 overload)
console.log("After Splice: " + fruits);

let citrus = fruits.slice(1, 4);
console.log("Sliced Array: " + citrus); // Creates a new array from index 1 to 3

let position = fruits.indexOf("Apple");
console.log("Index of Apple: " + position); // Finds the index of "Apple"

let removed = fruits.pop(); // Removes the last element
console.log("Removed Element: " + removed);
console.log("After Pop: " + fruits);

let joined = fruits.join(" - "); // Joins all elements into a string
console.log("Joined String: " + joined);

let moreFruits = ["Pineapple", "Strawberry"];
let allFruits = fruits.concat(moreFruits); // Merges two arrays
console.log("Concatenated Array: " + allFruits);

let numbersArray = [5, 10, 15, 20, 25];
let filtered = numbersArray.filter(function (num) {
    return num > 15;
});
console.log("Filtered Array (num > 15): " + filtered); // Filters elements greater than 15