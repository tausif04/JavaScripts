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



