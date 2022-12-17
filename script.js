//Make computer choice random between Rock, Paper, and Scissors
function getComputerChoice() {
  // generate a random number generator
  function randomNum() {
    return Math.floor(Math.random() * (3 - 1 +1)) + 1;
  }
  // generate a choice from a number
  if (randomNum() === 1) {
    return 'rock';
  } else if (randomNum() === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const computerChoice = getComputerChoice();
//Make input from user
let playerChoice = prompt('Please enter your choice').toLowerCase();

//Make function to get the winner
function playRound(computerChoice, playerChoice) {
  if (computerChoice == "rock") {
    if (playerChoice == 'rock') {
      return 'draw';
    } else if (playerChoice == 'paper') {
      return 'Player Win';
    } else {
      'Computer Win';
    }
  }
  if (computerChoice == "paper") {
    if (playerChoice == 'paper') {
      return 'draw';
    } else if (playerChoice == 'scissors') {
      return 'Player Win';
    } else {
      'Computer Win';
    }
  }
  if (computerChoice == "scissors") {
    if (playerChoice == 'scissors') {
      return 'draw';
    } else if (playerChoice == 'rock') {
      return 'Player Win';
    } else {
      'Computer Win';
    }
  }
}