 // Define variables
let score = 0;
let currentQuestionIndex = 0;


const questions = [
            {
                question: "What is meaning of the word 'Per favore' in English?",
                options: ["1. Please", "2. Favor", "3. Person", "4. Sorry"],
                answer: 1
            },
            {
                question: "When can you say 'Boh' in Italian?",
                options: ["1. When you need something", "2. When you are bored", "3. When you are clueless", "4. When you meet a new person"],
                answer: 3
            },
            {
                question: "What is 'Vino' in English?",
                options: ["1. Vine", "2. Wine", "3. Vinegar", "4. Win"],
                answer: 2 
            },
            {
                question: "How do you say 'All is well' in Italian?",
                options: ["1. Alle bene", "2. Come va", "3. Sono di", "4. Tutto bene"],
                answer: 4
            },
            {
                question: "How do you say 'Luna' in English?",
                options: ["1. Love", "2. Moon", "3. Line", "4. Milk"],
                answer: 2
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

        // Validate user input so that the input between 1 - 4
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
        const quizId = "Italian"; // Change this to a unique identifier for each quiz

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
