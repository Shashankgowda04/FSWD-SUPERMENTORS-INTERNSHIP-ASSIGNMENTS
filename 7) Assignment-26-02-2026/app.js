// 1. Initialize Game Variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// 2. Select DOM Elements
const guessInput = document.getElementById('userGuess');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptDisplay = document.getElementById('attemptCount');
const resetBtn = document.getElementById('resetBtn');

// 3. Logic Function: Check the Guess
function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;
    attemptDisplay.textContent = attempts;

    // Conditionals: The "Logic Builder" part
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "❌ Please enter a valid number between 1 and 100.";
        message.style.color = "orange";
    } else if (userGuess === randomNumber) {
        message.textContent = `🎉 Correct! The number was ${randomNumber}. You won in ${attempts} tries!`;
        message.style.color = "green";
        endGame();
    } else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high! Try a lower number.";
        message.style.color = "red";
    } else {
        message.textContent = "📈 Too low! Try a higher number.";
        message.style.color = "red";
    }

    guessInput.value = ""; // Clear input after guess
    guessInput.focus();
}

// 4. Function to End and Reset Game
function endGame() {
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptDisplay.textContent = attempts;
    message.textContent = "";
    guessBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
    guessInput.value = "";
}

// 5. Event Listeners
guessBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);

// Allow pressing "Enter" key to guess
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});