
var buttonColours = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];
var userClickedPattern = [];
var level = Number(0);
var highScore = Number(0);
var backGround = document.querySelector('body'); //didnt have to declare
var started = false;

//functions for the buttons(sound, animate and checkAnswer)
$('.btn').click(function() {

  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animateBtn(userChosenColour);
  //Call checkAnswer() after a user has clicked and chosen their answer
  checkAnswer(userClickedPattern.length-1);
});

//for mobile 'touchstart'/keydown
$(document).bind('touchstart keydown', function () {
  if (!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
  }
})


//Core of game, sequence of each level
function nextSequence () {
    userClickedPattern = [];
    level++;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    document.getElementById('level-title').textContent = `Level:${level}`;

    $('#' + randomChosenColour).fadeIn(175).fadeOut(175).fadeIn(175);
    
    playSound(randomChosenColour);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
  
        //console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            //Call nextSequence() after a 1100 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1100);
          
            //Changes Highscore/Highest Level Completed
            if (level > highScore) {
                highScore = level;
                document.getElementById('high-score').textContent = 'Highest Level Completed: ' + highScore;
            }
        }

    } else {
          gameOverSound();
          $('body').addClass('game-over');
    
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 300);
    
          document.getElementById('level-title').textContent = 'Game Over! Press Any Key to Restart';
          startOver();
        
      //console.log("wrong");
    } 
}

//Gameover sound("didn't have to write function to play it")
function gameOverSound () {
    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
}

//Function for button sounds
function playSound (name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

//animate button, click with CSS class
function animateBtn(currentColor) {
    $('#' + currentColor).addClass('pressed');
    setTimeout(function() {
        $('#' + currentColor).removeClass('pressed');
    }, 200)
};

//reset elements to starting values
function startOver () {
    level = 0;
    started = false;
    gamePattern = [];
}