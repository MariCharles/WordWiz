// Validating the form
function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var theme = document.querySelector('input[name="Q_type"]:checked');
    var queryDetails = document.getElementById('detail').value.trim();

    // Fill the required fields
    if (name === "") {
        alert("Please enter your name.");
        return false;
    } else if (!/^[a-zA-Z\s]*$/.test(name)) { // Check if name contains only letters and spaces
        alert("Name should contain only letters.");
        return false;
    } else if (email === "") {
        alert("Please enter your email address.");
        return false;
    } else if (!theme) {
        alert("Please choose a theme.");
        return false;
    } else if (theme.value === "Other" && queryDetails === "") {
        alert("Please provide details for the 'Other' theme.");
        return false;
    }

    // Validating the email
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Summary in the prompt
    var summary = "Name: " + name + "\nEmail: " + email + "\nTheme: " + theme.value + "\nQuery Details: " + queryDetails;
    var confirmation = confirm(summary + "\n\nDo you want to proceed?");

    if (confirmation) {
        // Open a pop-up window with the summary
        var popupWindow = window.open("", "Query Summary", "width=400,height=300");
        if (popupWindow) {
            var summaryLines = summary.split("\n");
            summaryLines.forEach(function(line) {
                popupWindow.document.write("<p>" + line + "</p>");
            });
            document.getElementById("queryForm").reset();
            // Submit the form asynchronously
            submitForm();
        } else {
            alert("Please allow pop-ups for this site to see the query summary.");
        }
    }

    return confirmation;
}

// Function to submit the form asynchronously
function submitForm() {
    var form = document.getElementById('queryForm');
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Handle successful form submission
            console.log("Form submitted successfully.");
        } else {
            // Handle form submission errors
            console.error("Form submission failed.");
        }
    };
    xhr.send(formData);
}

// Validating via JavaScript
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// JavaScript for form reset
document.getElementById('resetButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form reset behavior
    document.getElementById('queryForm').reset(); // Reset the form manually
});

// JavaScript for form submission
document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Your form validation logic
    if (validateForm()) {
        // No need to submit the form here, as it will be submitted after confirmation
    }
});
