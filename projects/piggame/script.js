'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions

const init = function () {
    scores = [0, 0];
    currentScore = 0;   //Declare start score
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    
};
init();  // Runs script at start

const switchPlayer = function () {
       document.getElementById(`current--${activePlayer}`).textContent = 0;
         currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0; // if activePlayer is 0 change to 1
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        diceSound();
        const dice = Math.floor(Math.random() * 6) + 1;
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // 3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;  // Same as currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            oopsSound();
            // if true, switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        holdSound();
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;  // scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            cheerSound();
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

function diceSound () {
    var audio = new Audio('dice.mp3');
    audio.play();
}
function oopsSound () {
    var audio = new Audio('oops.wav');
    audio.play();
}
function holdSound () {
    var audio = new Audio('hold.wav');
    audio.play();
}
function cheerSound () {
    var audio = new Audio('cheering.wav');
    audio.play();
}

// Reset Button 
btnNew.addEventListener('click', init);