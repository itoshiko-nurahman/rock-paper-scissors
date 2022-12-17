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
