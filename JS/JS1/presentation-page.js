

// Redirects the user to the main page after delay
function delay() {
    // Waiting 10 seconds before sliding up
    setTimeout(function() {
		
        // Slide up animation
        document.body.classList.add("slide-up");
    
        // Redirect after animation completes
        setTimeout(function() {
            window.location = "././MainPage.html";
        }, 1000); // Delay time of slide up animation

    }, 4000); // Wait for 9 seconds before starting the slide-up animation
}







