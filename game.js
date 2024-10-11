let targetNumber;
let attempts;

function initializeGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('game-message').textContent = '';
}

function handleGuess() {
    const guessInput = document.getElementById('guess-input');
    const guess = parseInt(guessInput.value);
    const messageElement = document.getElementById('game-message');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (guess === targetNumber) {
        messageElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        createFireworks();
        setTimeout(() => {
            initializeGame();
        }, 5000);
    } else if (guess < targetNumber) {
        messageElement.textContent = 'Too low. Try again!';
    } else {
        messageElement.textContent = 'Too high. Try again!';
    }

    guessInput.value = '';
}
function createFireworks() {
    const fireworks = document.createElement('div');
    fireworks.className = 'fireworks';
    document.body.appendChild(fireworks);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
        particle.style.animationDelay = (Math.random() * 0.2) + 's';
        fireworks.appendChild(particle);
    }

    setTimeout(() => {
        document.body.removeChild(fireworks);
    }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    initializeGame();
    document.getElementById('guess-button').addEventListener('click', handleGuess);
});
