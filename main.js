const words = ["javascript", "html", "css", "react", "angular", "node", "python", "java", "ruby", "php"];
let randomWord, scrambledWord, timer;
const timeLimit = 30;
let timeRemaining = timeLimit;

const wordDisplay = document.getElementById("wordDisplay");
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const hint = document.getElementById("hint");
const result = document.getElementById("result");
const timeLeftDisplay = document.getElementById("timeLeft");

initializeGame();

function initializeGame() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = shuffleWord(randomWord);
    displayScrambledWord();
    hint.textContent = `Hint: ${randomWord.length} letters`;
    guessInput.value = "";
    result.textContent = "";
    timeRemaining = timeLimit;
    timeLeftDisplay.textContent = timeRemaining;

    clearInterval(timer);
    timer = setInterval(updateTime, 1000);
}

function displayScrambledWord() {
    wordDisplay.textContent = scrambledWord;
}

function shuffleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function checkGuess() {
    const guess = guessInput.value.toLowerCase();
    if (guess === randomWord) {
        result.textContent = "Correct!";
    } else {
        result.textContent = "Incorrect! Try again.";
    }
}

function updateTime() {
    timeRemaining--;
    timeLeftDisplay.textContent = timeRemaining;
    if (timeRemaining === 0) {
        clearInterval(timer);
        result.textContent = "Time's up! Try again.";
        guessInput.disabled = true;
        checkButton.disabled = true;
    }
}

checkButton.addEventListener("click", checkGuess);
