
// Example of a callback function in JavaScript
/*
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        callback(data);
    }, 1000);
}

fetchData(function (data) {
    document.write("Fetched Data: " + JSON.stringify(data) + "<br>");
});


*/

function greet(name, callback) {
    document.write("Hello, " + name + "<br>");
    callback();
}

function sayBye() {
    document.write("Goodbye!<br>");
}

greet("Ajay", sayBye);