document.addEventListener('DOMContentLoaded', function () {
    // Get the buttons for increasing and decreasing font size
    var increaseButton = document.getElementById('increaseFontSize');
    var decreaseButton = document.getElementById('decreaseFontSize');

    // Set initial font size
    var currentSize = 16; // default font size in pixels

    // Function to increase font size
    increaseButton.addEventListener('click', function () {
        currentSize += 2; // increase font size by 2 pixels
        document.body.style.fontSize = currentSize + 'px';
    });

    // Function to decrease font size
    decreaseButton.addEventListener('click', function () {
        currentSize -= 2; // decrease font size by 2 pixels
        document.body.style.fontSize = currentSize + 'px';
    });
});
