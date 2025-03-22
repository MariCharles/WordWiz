// Function to set a message on a form element
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");
    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);
}

// Function to clear a message from a form element
function clearFormMessage(formElement) {
    const messageElement = formElement.querySelector(".form_message");
    messageElement.textContent = "";
    messageElement.classList.remove("form_message-success", "form_message-error");
}

// Function to set an error message on an input element
function setInputError(inputElement, message) {
    inputElement.classList.add("form_input-error");
    const errorElement = inputElement.parentElement.querySelector(".form_input-error-message");
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Function to clear an error message from an input element
function clearInputError(inputElement) {
    inputElement.classList.remove("form_input-error");
    const errorElement = inputElement.parentElement.querySelector(".form_input-error-message");
    if (errorElement) {
        errorElement.textContent = "";
    }
}


// Function to toggle password visibility
function showPassword() {
    var x = document.getElementById("userpw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// Event listener to clear input errors when the user types in an input field
document.querySelectorAll(".form_input").forEach(inputElement => {
    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    });
});

// Function to clear all input errors
function clearAllInputErrors() {
    document.querySelectorAll(".form_input").forEach(inputElement => {
        clearInputError(inputElement);
    });
}

function checkRequiredFields() {
    let inputError = false;
    document.querySelectorAll(".requiredInput").forEach(inputElement => {
        if (inputElement.value.trim() === "") {
            setInputError(inputElement, "This is a required field.");
            inputError = true;
        }
    });
    return inputError;
}

// Function to perform login - checking if email/password combination is valid
function performLogin(xmlDoc, loginForm) {

    const inputEmail = loginForm.querySelector("#userEmail").value.trim();
    const inputPassword = loginForm.querySelector("#userpw").value.trim();

    const users = xmlDoc.getElementsByTagName("user");
    let isLoggedIn = false;
    let userName = ""; // Initialize userName variable
    for (let i = 0; i < users.length; i++) {
        const email = users[i].getElementsByTagName("email")[0].childNodes[0].nodeValue;
        const password = users[i].getElementsByTagName("password")[0].childNodes[0].nodeValue;
        userName = users[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;

        if (inputEmail === email && inputPassword === password) {
            isLoggedIn = true;
            break;
        }

    }

    if (isLoggedIn) {
        setFormMessage(loginForm, "success", "Login was successful!");

        const successPopup = document.getElementById("successPopup");
        successPopup.querySelector("p:nth-of-type(1)").innerText = `Welcome back, ${userName}! We're thrilled to see you return to WordWiz, where every login is a step closer to mastering new languages.`;
        successPopup.querySelector("p:nth-of-type(2)").innerText = "You will be redirected to the main page shortly. Let's continue this wonderful journey together!";
      
        // Show success popup
        successPopup.style.display = "block";

        // Show and blur the background
        blurBackground.style.display = "block";

        // Delay the alert message by 2 seconds
        setTimeout(() => {
            window.location.href = "././MainPage.html";
        }, 10000);


    } else {
        setFormMessage(loginForm, "error", "Invalid email or password. Please try again!");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });

        fetch("XML1/login-info.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");

            // Check if any required fields are empty
            let inputError = checkRequiredFields();


            if (!inputError) {
                performLogin(xmlDoc, loginForm);
            }

        })

    });
});

// Resetting form error message and input errors on reset button click
const resetButton = document.getElementById("reset_btn");
resetButton.addEventListener("click", () => {
    const loginForm = document.getElementById("loginForm");
    clearFormMessage(loginForm);
    clearAllInputErrors();
});

// Functionality for the arrow keys to navigate between form fields
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    form.addEventListener("keydown", function(event) {
        const inputs = Array.from(form.querySelectorAll("input, select"));
        const currentInput = event.target;
        const currentIndex = inputs.indexOf(currentInput);
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission
            const nextIndex = currentIndex + 1;
            if (nextIndex < inputs.length) {
                inputs[nextIndex].focus(); // Focus on the next input field
            }
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();
            const prevIndex = currentIndex - 1 < 0 ? inputs.length - 1 : currentIndex - 1;
            inputs[prevIndex].focus(); // Focus on the previous input field
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();
            const nextIndex = (currentIndex + 1) % inputs.length;
            inputs[nextIndex].focus(); // Focus on the next input field
        }
    });
});



