// function sayHello() {
//     alert("Hello, World!");
// }
// document.getElementById("myButton").addEventListener("click", sayHello);

function changeColor() {
    document.getElementById("addTextBtn").style.backgroundColor = "lightblue";
}

function changeText() {
    const el = document.getElementById("myHeader");//GET the element BY ID
    console.log(el);
    el.textContent = "You are Hacked! 😈";
    el.style.color = "red";
    el.style.fontSize = "50px";
}

//selecting all the elements with class name "myClass"
const elements = document.getElementsByClassName("myClass");
console.log(elements);

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", function () {
        elements[i].style.backgroundColor = "yellow";
    });
}

function revealTreasure() {
    const treasure = document.getElementById("treasure");
    treasure.style.display = "block";
    treasure.style.color = "gold";
    treasure.style.fontSize = "40px";
}