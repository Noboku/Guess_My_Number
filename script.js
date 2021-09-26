'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent; // The Question Mark
// document.querySelector('.score').textContent; // The Number Of Tries Left
// document.querySelector('.guess'); // The Input Value

const secretNumber = Math.trunc(Math.random() * 20);
let score = 7;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  // Selecting the check class, and listening to an event, which in this case is a click, and when that event happens, the code in front of it executes.
  const guess = Number(document.querySelector('.guess').value); // Storing the guess class, which is an input, into a guess variable, and converting the value into a number.

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Invalid Number!';

    // When guess is higher than 20
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      '❌ Number is not between 1 and 20';

    // When player wins
  } else if (guess === secretNumber) {
    if (score === 0) {
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '👎 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'rgb(184, 8, 8)';
    } else {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
    // When guess is too low
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '👎 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'rgb(184, 8, 8)';
    }

    // When guess is too high
  } else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '👎 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'rgb(184, 8, 8)';
    }
  }
});
