'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20; //has to be let because it changes
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No Number!';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🥳 Correct Number!'
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundImage = 'url(congrats.jpg)';
        document.querySelector('body').style.backgroundPosition = 'center';

        document.querySelector('.number').style.width = '40rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '⬆ Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😢 You lost the game!';
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '⬇ Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😢 You lost the game!';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundImage = 'url(background.png)';
    document.querySelector('.number').style.width = '15rem';
});
