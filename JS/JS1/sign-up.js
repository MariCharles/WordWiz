// Function to set input error message
function setInputError(inputElement, message) {
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
}

// Function to clear input error message
function clearInputError(inputElement) {
    inputElement.classList.remove("form_input-error");
    const errorMessageElement = inputElement.parentElement.querySelector(".form_input-error-message");
    if (errorMessageElement) {
        errorMessageElement.textContent = "";
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

    var y = document.getElementById("confirm_password");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}

// Event listener to clear input errors on input
document.querySelectorAll(".form_input").forEach(inputElement => {
    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    });
});

function clearAllInputErrors() {
    document.querySelectorAll(".form_input").forEach(inputElement => {
        clearInputError(inputElement);
    });
    document.querySelectorAll(".form_message").forEach(messageElement => {
        messageElement.textContent = "";
    });
}

// Function to check for required fields
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

// Function to validate email
function validateEmail(email) {
    if (email.length === 0) {
        return "This is a required field.";
    }

    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    if (atIndex === -1) {
        return "Email must contain an '@' symbol.";
    } 
    else if (email.indexOf("@", atIndex + 1) !== -1) {
        return "Email must not contain an '@' symbol after an '@' symbol.";
    } 
    else if (atIndex === 0 || atIndex === email.length - 1) {
        return "Email is incomplete. Email must contain characters before and after '@'.";
    } 
    else if (dotIndex === -1) {
        return "Email must contain a '.' after the '@' symbol.";
    } 
    else if (dotIndex === email.length - 1) {
        return "Email must have a domain name after the '.' symbol.";
    }

    return "";
}

// Function to validate password
function validatePassword(password, confirmPassword) {
    if (password.length === 0) {
        return "This is a required field.";
    }

    else if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    let hasSymbol = false;
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (['@', '#', '$', '!'].includes(char)) {
            hasSymbol = true;
            break;
        }
    }
    if (!hasSymbol) {
        return "Password must include at least one of the following symbols: '@', '#', '$', or '!'";
    }

    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }

    return "";
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");

    const successPopup = document.getElementById("successPopup");

    signupForm.addEventListener("submit", e => {
        e.preventDefault();

        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Checking if any required fields are empty
        let inputError = checkRequiredFields();

        // Validate email
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();
        const errorMessage = validateEmail(email);

        if (errorMessage) {
            setInputError(emailInput, errorMessage);
            inputError = true;
        }


        // Validating password
        const passwordInput = document.getElementById("userpw");
        const confirmPasswordInput = document.getElementById("confirm_password");
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const passwordError = validatePassword(password, confirmPassword);

        if (passwordError) {
            setInputError(passwordInput, passwordError);
            inputError = true;
        }
        

        // Get the value of the name input field
        let nameInput = document.getElementById("signupName");
        let name = nameInput.value.trim();


        // Submit the form if there are no input errors
        if (!inputError) {
            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
            alert(`Dear ${name}, your details have been submitted successfully!`);

            // Set the user's name in the success pop-up
            document.getElementById("userNameSpan").textContent = name;

            
            // Show success popup
            successPopup.style.display = "block";

            // Show and blur the background
            blurBackground.style.display = "block";

            // Redirect the page after a delay (e.g., 3 seconds)
            setTimeout(function() {
            window.location.href = "././MainPage.html"; 
            }, 7000); 

        
        }


    });

});

// Resetting form error message on reset button click
const resetButton = document.getElementById("reset_btn");
resetButton.addEventListener("click", () => {
    const signupForm = document.getElementById("signupForm");
    clearAllInputErrors();

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Preventing default form submission and adding functionalities for up/down arrow keys
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    form.addEventListener("keydown", function(event) {
        const inputs = Array.from(form.querySelectorAll("input"));
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

// Custom select dropdown class
class CustomSelect {
    constructor(originalSelect) {
        this.originalSelect = originalSelect;
        this.customSelect = document.createElement("div");
        this.customSelect.classList.add("select");
    
        this.originalSelect.querySelectorAll("option").forEach((optionElement) => {
            const itemElement = document.createElement("div");
    
            itemElement.classList.add("select__item");
            itemElement.textContent = optionElement.textContent;
            this.customSelect.appendChild(itemElement);
    
            itemElement.addEventListener("click", () => {
            this._select(itemElement);
            });
        });
  
        this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
        this.originalSelect.style.display = "none";
    
        this.selectedItem = null;
  

        // Add event listener for the reset button
        const resetButton = document.querySelector("#reset_btn");
        if (resetButton) {
            resetButton.addEventListener("click", () => {
            this.reset();
                
            });
        }
  
    }
    
    // Method to select an item
    _select(itemElement) {
        if (this.selectedItem) {
            this.selectedItem.classList.remove("select__item--selected");
        }
  
        const index = Array.from(this.customSelect.children).indexOf(itemElement);
        const selectedOption = this.originalSelect.querySelectorAll("option")[index];
        selectedOption.selected = true;
    
        itemElement.classList.add("select__item--selected");
        this.selectedItem = itemElement;
    }
  
    // Method to reset the selection
    reset() {
        this.originalSelect.selectedIndex = -1;
        this.customSelect.querySelectorAll(".select__item").forEach((itemElement) => {
            itemElement.classList.remove("select__item--selected");
        });

        this.selectedItem = null;

    }
}
  
// Initialize custom select dropdowns
document.querySelectorAll(".custom-select").forEach((selectElement) => {
new CustomSelect(selectElement);
});




