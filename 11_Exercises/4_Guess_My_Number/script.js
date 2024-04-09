'use strict';

//Secret Number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;

//Score
let score = 20;

//HighScore
let highScore = 0;
// let highScore = [];

//REFACTORING FUNCTION .message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Check Buttom
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('🚦 No Number, Introduce un numero del 1 al 20 idiot!');
    // document.querySelector('.message').textContent =
    //   '🚦 No Number, Introduce un numero del 1 al 20 idiot!';
  } else if (guess > 20) {
    displayMessage('Introduce un numero del 1 al 20 idiot!');
    // document.querySelector('.message').textContent =
    //   'Introduce un numero del 1 al 20 idiot!';

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    // CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;

    //Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    /* FORMA ALTERNATIVA DE HIGHSCORE CON ARRAYS --> let highScore = [];
    if (score > highScore) {
    highScore.push(score);
    document.querySelector('.highscore').textContent = Math.max(...highScore);
    }
    */
  } else if (guess !== secretNumber && guess < 21) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Game Over Mother fucker!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // // When Number is too low
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'The number is lower!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Game Over Mother fucker!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When number is too high
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'The number is higher!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Game Over Mother fucker!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
//Again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});
