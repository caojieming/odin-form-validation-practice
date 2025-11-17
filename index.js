const form = document.querySelector("#form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const country = document.querySelector("#country");
const countryError = document.querySelector("#country-error");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip-error");
const password1 = document.querySelector("#password1");
const password1Error = document.querySelector("#password1-error");
const password2 = document.querySelector("#password2");
const password2Error = document.querySelector("#password2-error");

const submit = document.querySelector("#submit");


// validation checks after input

email.addEventListener("input", emailValidation);
function emailValidation() {
    if(email.checkValidity() === true) {
        emailError.classList.remove("active");
        emailError.textContent = '';
    }
    else {
        if(email.validity.valueMissing) {
            emailError.classList.add("active");
            emailError.textContent = "Please enter an email!";
        }
        else if(email.validity.typeMismatch) {
            emailError.classList.add("active");
            emailError.textContent = "Please enter a valid email!";
        }
    }
}

country.addEventListener("input", countryValidation);
function countryValidation() {
    if(country.checkValidity() === true) {
        countryError.classList.remove("active");
        countryError.textContent = '';
    }
    else {
        if(country.validity.valueMissing) {
            countryError.classList.add("active");
            countryError.textContent = "Please enter an country!";
        }
        else if(country.validity.valid) {
            countryError.classList.add("active");
            countryError.textContent = "Please enter a valid country!";
        }
    }
}

zip.addEventListener("input", zipValidation);
function zipValidation() {
    if(zip.checkValidity() === true) {
        zipError.classList.remove("active");
        zipError.textContent = '';
    }
    else {
        if(zip.validity.valueMissing) {
            zipError.classList.add("active");
            zipError.textContent = "Please enter an zip!";
        }
        else if(zip.validity.valid) {
            zipError.classList.add("active");
            zipError.textContent = "Please enter a valid zip!";
        }
    }
}

password1.addEventListener("input", password1Validation);
function password1Validation() {
    if(password1.validity.valueMissing) {
        password1Error.classList.add("active");
        password1Error.textContent = "Please enter a password!";
    }
    else if(password1.checkValidity() === false) {
        password1Error.classList.add("active");
        password1Error.textContent = "Please enter a valid password!";
    }
    // check if password1 === password2
    else {
        passwordCheck()
    }
}

password2.addEventListener("input", password2Validation);
function password2Validation() {
    if(password2.validity.valueMissing) {
        password2Error.classList.add("active");
        password2Error.textContent = "Please enter a password!";
    }
    else if(password2.checkValidity() === false) {
        password2Error.classList.add("active");
        password2Error.textContent = "Please enter a valid password!";
    }
    // check if password1 === password2
    else {
        passwordCheck()
    }
}

// checks for password equality and makes changes accordingly
function passwordCheck() {
    if(password1.value !== password2.value) {
        // add mismatch class to input for red borders, add active for error message padding
        password1.classList.add("mismatch");
        password1Error.classList.add("active");
        password1Error.textContent = "Passwords do not match!";

        password2.classList.add("mismatch");
        password2Error.classList.add("active");
        password2Error.textContent = "Passwords do not match!";
    }
    else {
        // remove mismatch class to remove input red borders, remove active to disable error message padding
        password1.classList.remove("mismatch");
        password1Error.classList.remove("active");
        password1Error.textContent = '';

        password2.classList.remove("mismatch");
        password2Error.classList.remove("active");
        password2Error.textContent = '';
    }
}


// stops page from refreshing if form is completely valid
form.addEventListener("submit", (e) => {
    emailValidation();
    countryValidation();
    zipValidation();
    password1Validation();
    password2Validation();

    if(email.checkValidity() && country.checkValidity() && zip.checkValidity() && password1.checkValidity() && password2.checkValidity()) {
        submit.textContent = "Submitted! (b^_^)b";
        e.preventDefault();
    }
    else {
        submit.textContent = "Invalid input! Try again. (╯°□°）╯︵ ┻━┻";
        e.preventDefault();
    }

});
