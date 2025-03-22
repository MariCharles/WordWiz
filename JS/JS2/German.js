// Define variables
let score = 0;
let currentQuestionIndex = 0;


const questions = [
            {
                question: "What is meaning of the word 'Flugzeug' in English?",
                options: ["1. Fly", "2. Airplane", "3. Airport", "4. Feather"],
                answer: 2
            },
            {
                question: "How do you say 'Good Day' in German?",
                options: ["1. Guten Tag", "2. Guten Morgen", "3. Guten Da", "4. Guden Tage"],
                answer: 1
            },
            {
                question: "What is 'Liebe' in English?",
                options: ["1. Live", "2. Lie", "3. Lonely", "4. Love"],
                answer: 4 
            },
            {
                question: "What is the ß sound in German?",
                options: ["1. ss", "2. bh", "3. sh", "4. be"],
                answer: 1 
            },
            {
                question: "How do you say 'Entschuldigung' in English?",
                options: ["1. Earring", "2. Thank You", "3. Sorry", "4. Clothes"],
                answer: 3
            }
            
        ];
		
// Function to start the quiz
function startQuiz() {
    // Reset score if starting the quiz again
    score = 0;
    currentQuestionIndex = 0;
    askQuestion();
}
// Function to ask a question
function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        let userAnswer = prompt(questions[currentQuestionIndex].question + "\n" + questions[currentQuestionIndex].options.join("\n"));

        // Validate user input
        while (userAnswer === "" || isNaN(userAnswer) || parseInt(userAnswer) < 1 || parseInt(userAnswer) > 4) {
            alert("Invalid input! Please enter a number between 1 and 4.");
            userAnswer = prompt(questions[currentQuestionIndex].question + "\n" + questions[currentQuestionIndex].options.join("\n"));
        }

        // Convert user's answer to integer
        const userAnswerInt = parseInt(userAnswer);
        
        // Check if the answer is correct
        if (userAnswerInt === questions[currentQuestionIndex].answer) {
            score += 2; 
        } else {
            score -= 1; 
        }

        // Move to the next question
        currentQuestionIndex++;
        askQuestion();
    } else {
        // Display final score
        alert("Quiz Completed!\nYour Score: " + score);
		
		// Generate a unique key for this quiz score
        const quizId = "German"; // Change this to a unique identifier for each quiz

        // Save the score in local storage with the unique key
        localStorage.setItem(quizId + "_score", score);
		
        
        // Update the scoreboard on the page
        const scoreboard = document.getElementById("score");
			if (scoreboard) {
			scoreboard.innerHTML = "Score: " + score + "<br>You have earned " + score + " points.<br> Please claim the points in your next purchase.";
		}
			}
		}


// Function to go to the main page
function goToMainPage() {
    window.location.href = "MainPage.html";
}
