function submitReview(event) {
    event.preventDefault(); // Prevents the form from submitting

    // Get form elements
    var reviewerNameInput = document.getElementById("reviewerName");
    var reviewDateInput = document.getElementById("reviewDate");
    var userRatingInput = document.getElementById("userRating");
    var reviewContentInput = document.getElementById("reviewContent");

    // Get values from form elements
    var reviewerName = reviewerNameInput.value.trim();
    var reviewDate = reviewDateInput.value;
    var userRating = parseInt(userRatingInput.value);
    var reviewContent = reviewContentInput.value.trim();

    // Validation
    if (reviewerName === "") {
        showCustomAlert("Please enter your name.");
        return;
    }

    if (reviewDate === "") {
        showCustomAlert("Please select a review date.");
        return;
    }

    if (isNaN(userRating) || userRating < 1 || userRating > 5) {
        showCustomAlert("Please enter a valid user rating between 1 and 5.");
        return;
    }

    if (reviewContent === "") {
        showCustomAlert("Please enter your review.");
        return;
    }
    // If all validation passes, you can submit the form or perform further actions here
    // For demonstration purposes, let's just log the data
    console.log("Reviewer Name:", reviewerName);
    console.log("Review Date:", reviewDate);
    console.log("User Rating:", userRating);
    console.log("Review Content:", reviewContent);

    // Clear the form
    event.target.reset();

    // Display the popup message
    displayPopup();
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

function displayPopup() {
    document.getElementById("popup-overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
}
