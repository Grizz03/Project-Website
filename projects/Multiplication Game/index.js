let lives = 3;
let score = 0;
let num1;
let num2;

document.getElementById("start").style.display = "block";
document.getElementById("timer").style.display = "none";
document.getElementById("num1").style.visibility = "hidden";
document.getElementById("num2").style.visibility = "hidden";
document.getElementById("check").style.visibility = "hidden";

//countdown function
function theCountdown() {
  document.getElementById("num1").style.visibility = "visible";
  document.getElementById("num2").style.visibility = "visible";
  document.getElementById("start").style.display = "none";
  document.getElementById("timer").style.display = "block";
  let seconds = "60";
  countdown = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= -1) gameOver();
  }, 1000);
}

//generates numbers on load
num1 = Math.floor(Math.random() * 10) + 1;
num2 = Math.floor(Math.random() * 10) + 1;
document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

//function for guess
function checkGuess() {
  answer = document.getElementById("answer").value;
  solution = Number(num1 * num2);
  if (answer == solution) {
    score++;
    document.querySelector("#score").textContent = score;
  }
  if (answer != solution) {
    lives--;
    document.querySelector("#lives").textContent = lives;
  }
  if (lives == -1) {
    gameOver();
  }

  //generates numbers everytime
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
}

//enter key enabled for input field then runs click of btn id
var input = document.getElementById("answer");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("check").click();
  }
});

document.querySelector("#check").addEventListener("click", function () {
  checkGuess();
  document.getElementById("answer").value = "";
});

//when game is over
function gameOver() {
  lives = 3;
  score = 0;
  clearInterval(countdown);
  alert(`Game over\nScore: ${score}`);
  document.getElementById("lives").textContent = 3;
  document.getElementById("score").textContent = 0;
  document.getElementById("start").style.display = "block";
  document.getElementById("timer").style.display = "none";
  document.getElementById("num1").style.visibility = "hidden";
  document.getElementById("num2").style.visibility = "hidden";
}
