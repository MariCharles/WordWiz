        // Define variables
let score = 0;
let currentQuestionIndex = 0;


const questions = [
            {
                question: "What is meaning of the word 'Felicidad' in English?",
                options: ["1. Happiness", "2. Gratitude", "3. Merry", "4. Sadness"],
                answer: 1
            },
            {
                question: "How do you say 'Good Bye' in Spanish?",
                options: ["1. Sonreír", "2. Gracias", "3. Adiós", "4. Ayuda"],
                answer: 3
            },
            {
                question: "What is 'Buenas noches' in English?",
                options: ["1. Good Morning", "2. Good Night", "3. Good Day", "4. Good Bye"],
                answer: 2
            },
            {
                question: "How do you say 'How are you?' in Spanish?",
                options: ["1. Cómo este? ", "2. Cómo va? ", "3. Bien está? ", "4. Cómo está? "],
                answer: 1 
            },
            {
                question: "How do you say 'Claro' in English?",
                options: ["1. Case", "2. Yes", "3. Confirm", "4. Of course"],
                answer: 4
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
        const quizId = "Spanish"; // Change this to a unique identifier for each quiz

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
