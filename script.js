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
function playRound(player, computer) {
  if (player == computer) return 'Draw!';
  if (player == 'rock' ) return (computer == 'scissors') ? 'Player Win' : 'Computer Win!';
  if (player == 'paper') return (computer == 'rock') ? 'Player Win!' : 'Computer Win!';
  if (player == 'scissors') return (computer == 'paper') ? 'Player Win!' : 'Computer Win!';
  }


//Don't know how to make score tracker
