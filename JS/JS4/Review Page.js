function toggleReadMore(button) {
    var content = button.previousElementSibling;
    content.style.maxHeight = content.style.maxHeight === '150px' ? '100%' : '150px';
    button.innerHTML = content.style.maxHeight === '150px' ? 'Read More' : 'Read Less';
}

//Changing the background color and the font color
document.addEventListener("DOMContentLoaded", function() {
  // Get pulldown menus
  var backgroundColorSelect = document.getElementById("background-color");
  var textColorSelect = document.getElementById("text-color");

  // Add event listeners to detect changes
  backgroundColorSelect.addEventListener("change", function() {
      var selectedBackgroundColor = backgroundColorSelect.value;
      document.body.style.backgroundColor = selectedBackgroundColor;
  });

  textColorSelect.addEventListener("change", function() {
      var selectedTextColor = textColorSelect.value;
      document.body.style.color = selectedTextColor;
  });
});

//Xml
function displayComments() {

    fetch('reviews.xml')
        .then(response => response.text())
        .then(xmlData => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
            const reviews = xmlDoc.getElementsByTagName('review');

            const mainContent = document.querySelector('.main-content');

            Array.from(reviews).forEach(review => {
                const reviewerName = review.querySelector('name').textContent;
                const avatar = review.querySelector('avatar').textContent;
                const date = review.querySelector('date').textContent;
                const rating = parseFloat(review.querySelector('rating').textContent);
                const content = review.querySelector('content').textContent;

                console.log(`Reviewer Name: ${reviewerName}`);
                console.log(`Avatar: ${avatar}`);
                console.log(`Date: ${date}`);
                console.log(`Rating: ${rating}`);
                console.log(`Content: ${content}`);
                console.log('----------------------------------');

                const article = document.createElement('article');
                article.innerHTML = `
                    <div class="reviewer-info">
                        <img class="reviewer-avatar" src="IMG/IMG4/Reviewers/${avatar}" alt="Reviewer Avatar">
                        <div class="reviewer-details">
                            <p class="reviewer-name">${reviewerName}</p>
                        </div>
                    </div>
                    <p>Date: ${date}</p>
                    <p class="user-rating">User Rating: ${getStars(rating)}</p>
                    <p>Review:</p>
                    <div class="read-more-content">
                        <p>${content}</p>
                    </div>
                    <button class="read-more-button" onclick="toggleReadMore(this)">Read More</button>
                `;

                mainContent.appendChild(article);
            });
        })
        .catch(error => console.error('Error fetching XML:', error));
}

function getStars(rating) {
    const starsTotal = 5;
    const starPercentage = (rating / starsTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    return `<span class="stars" style="width: ${starPercentageRounded}">&#9733;&#9733;&#9733;&#9733;&#9733;</span>`;
}

displayComments();



