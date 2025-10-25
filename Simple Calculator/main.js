function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const popup = document.getElementById('popup');
    const popupResult = document.getElementById('popup-result');
    const overlay = document.getElementById('overlay');

    popupResult.innerText = "";

    if (isNaN(num1) || isNaN(num2)) {
        showPopup("Please enter valid numbers!", 'error');
        return;
    }

    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/':
            if (num2 === 0) {
                result = "Cannot divide by zero!";
                showPopup(result, 'error');
                return;
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator!";
            showPopup(result, 'error');
            return;
    }

    showPopup(result, 'success');
}

function showPopup(resultText, resultClass) {
    const popup = document.getElementById('popup');
    const popupResult = document.getElementById('popup-result');
    const overlay = document.getElementById('overlay');

    popupResult.innerText = `Result: ${resultText}`;
    popup.classList.remove('success', 'error');
    popup.classList.add(resultClass);

    overlay.style.display = 'block';
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.opacity = 1;
    }, 50);
}

function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.style.opacity = 0;
    popup.style.visibility = 'hidden'
    setTimeout(() => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }, 500);
}
