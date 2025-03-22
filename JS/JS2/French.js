        // Define variables
let score = 0;
let currentQuestionIndex = 0;

const questions = [
    {
        question: "What does 'Au revoir' mean in English?",
        options: ["1. Hello", "2. GoodBye", "3. Good Day", "4. Bye"],
        answer: 2 // The correct answer is Goodbye
    },
    {
        question: "How do you say 'Hello' in French?",
        options: ["1. Bonjour", "2. Hola", "3. Ciao", "4. Hallo"],
        answer: 1 // The correct answer is Bonjour
    },
    {
        question: "How do you say 'Girl' in French?",
        options: ["1. Filla", "2. Auf", "3. Fille", "4. Gemma"],
        answer: 3 // The correct answer is Fille
    },
    {
        question: "How can you pronounce 'é' in English?",
        options: ["1. ai", "2. ei", "3. ee", "4. e"],
        answer: 1 // The correct answer is ai
    },
    {
        question: "What is 'Garçon' in English?",
        options: ["1. Grapes", "2. Boat", "3. Grass", "4. Boy"],
        answer: 4 // The correct answer is Boy
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
        const quizId = "French"; // Change this to a unique identifier for each quiz

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


