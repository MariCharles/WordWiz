        // Define variables
let score = 0;
let currentQuestionIndex = 0;

const questions = [
            {
                question: "What is meaning of the word 'Aurora' ?",
                options: ["1. Dawn", "2. Beauty", "3. Rose", "4. Bell"],
                answer: 1
            },
            {
                question: "What is the meaning of the proverb 'A watched pot never boils'?",
                options: ["1. You have to ignore the problem to make it go away", "2. Constatnly checking is always the better solution", "3. Always keep checking", "4. You have to give some time to make it happen"],
                answer: 4
            },
            {
                question: "Choose the number of the grammatically correct sentence",
                options: ["1. He work there", "2. He works there", "3. He working there", "4. He being working there"],
                answer: 2 
            },
            {
                question: "What is the meaning of 'Despondent'?",
                options: ["1. Happpy", "2. Dangerous", "3. Sad", "4. Anxious"],
                answer: 3
            },
            {
                question: "What is the meaning of 'Dodgy'?",
                options: ["1. Unreliable", "2. Dangerous", "3. Good", "4. Damage"],
                answer: 1
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
        const quizId = "English"; // Change this to a unique identifier for each quiz

        // Save the score in local storage with the unique key
        localStorage.setItem(quizId + "_score", score);
		
        // Update the scoreboard on the page
        const scoreboard = document.getElementById("score");
        // Update the scoreboard on the page with additional message
			if (scoreboard) {
				scoreboard.innerHTML = "Score: " + score + "<br>You have earned " + score + " points.<br> Please claim the points in your next purchase.";
			}

				}
			}


// Function to go to the main page
function goToMainPage() {
    window.location.href = "MainPage.html";
}

