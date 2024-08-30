const form = document.getElementById('Form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const cPassword = document.getElementById('cpass');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    validateField(username, 'Username is required.');
    validateField(email, 'Email is required.', isValidEmail);
    validateField(password, 'Password is required.', (value) => value.length >= 8);
    validateField(cPassword, 'Please confirm your password.', (value) => value === password.value.trim());
}

const validateField = (input, message, validationFn = (value) => value.trim() !== '') => {
    const inputValue = input.value.trim();
    if (!validationFn(inputValue)) {
        setError(input, message);
    } else {
        setSuccess(input);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(email) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(String(email).toLowerCase());
}
