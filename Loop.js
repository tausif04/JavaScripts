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