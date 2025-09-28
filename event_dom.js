// function sayHello() {
//     alert("Hello, World!");
// }
// document.getElementById("myButton").addEventListener("click", sayHello);

function changeColor() {
    document.getElementById("addTextBtn").style.backgroundColor = "lightblue";
}

function changeText() {
    const el = document.getElementById("myHeader");
    console.log(el);
    el.textContent = "You are Hacked! 😈";
    el.style.color = "red";
    el.style.fontSize = "50px";
}


