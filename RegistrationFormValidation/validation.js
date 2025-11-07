function validateForm() {

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    // Passwords are NOT trimmed to preserve leading/trailing spaces if allowed by policy.
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    let isValid = true;

    // Helper function to set/clear errors (TEXT & BORDER)
    const setError = (inputElement, errorSpanId, message) => {
        const errorSpan = document.getElementById(errorSpanId);
        errorSpan.textContent = message;
        if (message) {
            inputElement.classList.add('input-error');
        } else {
            inputElement.classList.remove('input-error');
        }
    };


    setError(nameInput, 'nameError', '');
    setError(emailInput, 'emailError', '');
    setError(passwordInput, 'passwordError', '');
    setError(confirmPasswordInput, 'confirmPasswordError', '');


    isValid = true;


    if (name.length < 3) {
        setError(nameInput, 'nameError', 'Name must be at least 3 characters long.');
        isValid = false;
    }
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
        setError(emailInput, 'emailError', 'Please enter a valid email address (e.g., user@domain.com).');
        isValid = false;
    }

    if (password.length < 6) {
        setError(passwordInput, 'passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }


    if (password !== confirmPassword) {
        setError(confirmPasswordInput, 'confirmPasswordError', 'Confirm Password must match the Password.');
        isValid = false;
    }


    if (isValid) {
        alert('Success! Form submitted successfully!');
    }

    return isValid;
}
