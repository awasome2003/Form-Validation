const form = document.getElementById('Form');
const username = document.getElementById('username');
const Email = document.getElementById('email');
const password = document.getElementById('pass');
const Cpass = document.getElementById('cpass');
const Submit = document.getElementById('btn');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    ValidateInputs();
})

const ValidateInputs = () => {
    const UsernameValue = username.value.trim();
    const EmailValue = Email.value.trim();
    const PasswordValue = password.value.trim();
    const cPasswordValue = Cpass.value.trim();

    if (UsernameValue === '') {
        SetError(username, 'Username is required.');
    }
    else {
        SetSuccess(username);
    }

    if (EmailValue === '') {
        SetError(Email, 'Email is required')
    } else if (!isValidEmail(EmailValue)) {
        SetError(Email, 'Please provide a valid email address.')
    } else {
        SetSuccess(Email)
    }

    if (PasswordValue === '') {
        SetError(password, 'Password is required.');
    } else if (password.value.length > 8) {
        SetError(password, 'Password must be at least 8 characters.')
    } else {
        SetSuccess(password)
    }

    if (cPasswordValue === '') {
        SetError(Cpass, 'Please Confirm Your Password.')
    } else if (cPasswordValue !== PasswordValue) {
        SetError(Cpass, "Password doesn't matched")
    } else {
        SetSuccess(Cpass)
    }
}

const SetError = (element, message) => {
    const inputControl = element.parentElement;
    const ErrorDisplay = inputControl.querySelector('.error');
    ErrorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const SetSuccess = element => {
    const inputControl = element.parentElement;
    const ErrorDisplay = inputControl.querySelector('.error');
    ErrorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(email) {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-z]{2,}))$/;
    return reg.test(String(email).toLowerCase());

