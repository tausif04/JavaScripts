// frontend/app.js
const API_BASE_URL = 'http://127.0.0.1:8000/';

// Helper function remains the same
const setError = (inputElement, errorSpanId, message) => {
    const errorSpan = document.getElementById(errorSpanId);
    errorSpan.textContent = message;

    if (message) {
        inputElement.classList.add('input-error');
    } else {
        inputElement.classList.remove('input-error');
    }
};

// --- Frontend Validation Logic (Specific to REGISTER page) ---
function validateRegistrationForm() {
    // NOTE: IDs must match register.html
    const inputs = {
        name: document.getElementById('regName'), email: document.getElementById('regEmail'),
        password: document.getElementById('regPassword'), confirmPassword: document.getElementById('regConfirmPassword')
    };
    const values = {
        name: inputs.name.value.trim(), email: inputs.email.value.trim(),
        password: inputs.password.value, confirmPassword: inputs.confirmPassword.value
    };

    let isValid = true;

    // Clear previous errors (using the correct element IDs)
    Object.keys(inputs).forEach(key => setError(inputs[key], `${key}Error`, ''));

    // 1. Name Validation
    if (values.name.length < 3) {
        setError(inputs.name, 'nameError', 'Username must be at least 3 characters long.'); isValid = false;
    }

    // 2. Email Validation
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(values.email)) {
        setError(inputs.email, 'emailError', 'Please enter a valid email address.'); isValid = false;
    }

    // 3. Password Length
    if (values.password.length < 6) {
        setError(inputs.password, 'passwordError', 'Password must be at least 6 characters long.'); isValid = false;
    }

    // 4. Confirm Password Match
    if (values.password !== values.confirmPassword) {
        setError(inputs.confirmPassword, 'confirmPasswordError', 'Confirm Password must match the Password.'); isValid = false;
    }

    return isValid;
}

// --- API Interaction Logic (Specific to REGISTER page) ---
async function handleRegistration() {
    if (!validateRegistrationForm()) { return; }

    const data = {
        username: document.getElementById('regName').value.trim(),
        email: document.getElementById('regEmail').value.trim(),
        password: document.getElementById('regPassword').value
    };

    try {
        const response = await fetch(`${API_BASE_URL}register/`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Registration successful! You can now log in.");
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            // Display backend errors 
            const errorMsg = result.username ? result.username[0] : (result.email ? result.email[0] : "Registration failed.");
            alert(`Backend Error: ${errorMsg}`);
        }
    } catch (error) {
        alert("Network Error: Could not connect to Django API.");
    }
}

// --- API Interaction Logic (Specific to LOGIN page) ---
async function handleLogin() {
    // NOTE: IDs must match login.html
    const data = {
        username: document.getElementById('loginUsername').value,
        password: document.getElementById('loginPassword').value
    };

    const loginErrorSpan = document.getElementById('loginError');
    loginErrorSpan.textContent = ''; // Clear previous errors

    try {
        const response = await fetch(`${API_BASE_URL}login/`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            localStorage.setItem('authToken', result.token);
            alert(`Login successful! Token stored locally. Welcome!`);
            // Redirect to a dashboard or success page
            // window.location.href = 'dashboard.html';
        } else {
            loginErrorSpan.textContent = result.error || "Invalid username or password.";
        }
    } catch (error) {
        loginErrorSpan.textContent = "Network error during login.";
    }
}