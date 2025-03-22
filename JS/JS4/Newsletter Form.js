function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateForm(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name.trim() === "") {
        showCustomAlert("Please enter your name.");
    } else if (!validateEmail(email)) {
        var message1 = "Please enter a valid email address.";
        showCustomAlert(message1)
    } else {
        var message2 = "Dear " + name + ", you have successfully subscribed for a personalized newsletter.";
        showPopup(message2);
        event.target.reset();
   }
}

function showCustomAlert(message) {
    var customAlert = document.getElementById("customAlert");
    var popupOverlay = document.getElementById("popup-overlay");

    customAlert.innerText = message;
    customAlert.style.display = "block";

    popupOverlay.style.display = "block";

    setTimeout(function() {
        customAlert.style.display = "none";
        popupOverlay.style.display = "none";
    }, 3000); // Hide the alert after 3 seconds
}

function showPopup(message) {
    var popup = document.getElementById("popup");
    var popupMessage = document.getElementById("popup-message");

    document.getElementById("popup-overlay").style.display = "block";
    popup.style.display = "block";
    popupMessage.textContent = message;
}

function closePopup() {
    document.getElementById("popup-overlay").style.display = "none";
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
