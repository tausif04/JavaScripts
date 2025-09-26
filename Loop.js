// For... In.. Loop

let students = { name: "Rahim", age: 25, address: "Dhaka, Bangladesh" };

for (let key in students) {
    document.write(key + ":" + students[key] + "<br>");
}

//Do .. While loop

let countDW = 3;
do {
    document.write("<br> Do While Loop " + countDW + "<br>");
    countDW = countDW + 2;
} while (countDW <= 20);

//for Loop
for (let count = 4; count < 10; count++) {
    document.write("<br> For Loop " + count);
}

document.write("<br>");

// !---------  foreach loop -----------------
//array.forEach(callback(element, index, arr), thisValue);
// callback --> It is a callback function executes on each array element.
// element  --> The current element being processed in the array.
// index(Optional) --> The index of current element.The array indexing starts from 0.
// array(Optional) --> The array on which forEach() is called.
// thisArg(Optional) --> Value to use as this when executing the callback function.
let numbers = [10, 20, 30, 40, 50];

numbers.forEach(function (element, index) {
    document.write("<br> Element at index " + index + ": " + element);
});

// JavaScript Array forEach() Method

// Original array
const items = [12, 24, 36];
const copy = [];

items.forEach(function (item) {
    copy.push(item);
});

document.write("<br> Copy Array: " + copy);
