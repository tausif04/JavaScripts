function myFunction() {
    console.log("Hello, World!");
}
myFunction();

function add(a, b) {
    return a + b;
}
document.write(add(5, 10) + "<br>");

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
document.write(greet("Alice") + "<br>");
document.write(greet() + "<br>");

anonymousFun = function (a, b) {
    return a * b;
}
document.write(anonymousFun(4, 5) + "<br>");

// Arrow Function
const square = (x) => x * x;
document.write(square(6) + "<br>");

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("This is an IIFE!");
})();

const appConfig = (function () {
    const apiKey = "12345-ABCDE";
    return { apiKey };
})();
document.write("API Key: " + appConfig.apiKey + "<br>");

//Generator Function
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const idGen = idGenerator();
document.write("Next ID: " + idGen.next().value + "<br>");
document.write("Next ID: " + idGen.next().value + "<br>");
document.write("Next ID: " + idGen.next().value + "<br>");
document.write("Next ID: " + idGen.next().value + "<br>");

// Recursive Function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
document.write("Factorial of 5: " + factorial(5) + "<br>");
