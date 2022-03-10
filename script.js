'use strict';

let secretNumber = Math.trunc((Math.random() * 20) + 1); // Secret number
let score = 20; // Starting score
let highscore = 0; // Starting highscore
function displayMessage(message) { // DOM class .message text content value
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input

    if (!guess) {
        displayMessage('❌ No number!');

        // When player wins

    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!');
        document.querySelector('body').style.backgroundColor = '#60B347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) { // This line creates highscore
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    } else if (guess !== secretNumber) { // When guesses are wrong
        if (score > 1) {
            displayMessage(guess > secretNumber ? '🤔 Your guess is too high!' : '🤔 Your guess is too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😢 You lost!!!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// 'Again' button is pressed

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc((Math.random() * 20) + 1); //This line rerolls secretr number
    displayMessage('Start guessing...');
    score = 20; // This line resets score
    document.querySelector('.score').textContent = score; // This line resets score
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; //This line resets entered guess
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});