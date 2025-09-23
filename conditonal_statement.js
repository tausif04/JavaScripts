age = 20;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

if (true) {
    console.log("Sohana Wins the Debate.");
}
let marks = 115;

if (marks >= 80 && marks <= 100) {
    document.write("Grade A+");
} else if (marks >= 70 && marks <= 79) {
    document.write("Grade A");
} else if (marks >= 60 && marks <= 69) {
    document.write("Grade A-");
} else if (marks >= 50 && marks <= 59) {
    document.write("Grade B");
} else if (marks >= 40 && marks <= 49) {
    document.write("Grade C");
} else if (marks >= 33 && marks <= 39) {
    document.write("Grade D");
} else {
    document.write("Grade F <br>");
}

let weather = "Foggy";
switch (weather) {
    case "Sunny":
        document.write("Its a Sunny Day.");
        break;
    case "Cloudy":
        document.write("Its cloudy today");
        break;
    case "Foggy":
        document.write("Its Foggy today");
        break;
    case "Rainy":
        document.write("Its Raining today. Take umb");
        break;
    default:
        document.write("Unknown weather, All the best");
}
