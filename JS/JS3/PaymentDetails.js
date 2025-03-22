// Retrieve total amount from URL parameter
var urlParams = new URLSearchParams(window.location.search);
var totalAmount = urlParams.get('total');
document.getElementById("totalAmount").innerText = totalAmount;

function validateAndOpenCheckout() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var address = document.getElementById("address").value.trim();

    // Simple validation for name, email, phone, and address
    if (name === "" || email === "" || phone === "" || address === "") {
        alert("All fields are required.");
        return; // Prevent form submission
    }

    var phoneRegex = /^[0-9]{10}$/; // Assuming 10-digit phone number
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return; // Prevent form submission
    }

    // Email validation
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return; // Prevent form submission
    }

    // If all validations pass, open the checkout page
    openCheckout();
}

function openCheckout() {
    window.location.href = "././OrderForm.html";
}
