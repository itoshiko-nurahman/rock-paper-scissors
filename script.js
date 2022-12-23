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

//Make variable to save the score
let playerScore = 0;
let computerScore = 0;

// Make function to get the winner
function playRound(player, computer) {
  if (player == computer) {
    document.getElementById('result').innerHTML = 'Draw!';
    return 'Draw!';
  }
  if (player == 'rock') {
    if (computer == 'scissors') {
      document.getElementById('result').innerHTML = 'Player Win!';
      playerScore++;
      document.getElementById('player-score').innerHTML = `Player Score : ${playerScore}`;
    } else {
      document.getElementById('result').innerHTML = 'Computer Win!';
      computerScore++;
      document.getElementById('computer-score').innerHTML = `Computer Score : ${computerScore}`;
    }
  } else if (player == 'paper') {
    if (computer == 'rock') {
      document.getElementById('result').innerHTML = 'Player Win!';
      playerScore++;
      document.getElementById('player-score').innerHTML = `Player Score : ${playerScore}`;
    } else {
      document.getElementById('result').innerHTML = 'Computer Win!';
      computerScore++;
      document.getElementById('computer-score').innerHTML = `Computer Score : ${computerScore}`;
    }
  } else if (player == 'scissors') {
    if (computer == 'paper') {
      document.getElementById('result').innerHTML = 'Player Win!';
      playerScore++;
      document.getElementById('player-score').innerHTML = `Player Score : ${playerScore}`;
    } else {
      document.getElementById('result').innerHTML = ' Computer Win!';
      computerScore++;
      document.getElementById('computer-score').innerHTML = `Computer Score : ${computerScore}`;
    }
  }
  
  if (playerScore >= 5) {
    document.getElementById('winner').innerHTML = 'Playerr Win this match';
  } else if (computerScore >= 5) {
    document.getElementById('winner').innerHTML = 'Computer Win this match';
}
}

//Play the game
document.getElementById('rock').addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});
document.getElementById('paper').addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});
document.getElementById('scissors').addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

if (playerScore >= 5) {
  document.getElementById('winner').innerHTML = 'Playerr Win this match';
} else if (computerScore >= 5) {
  document.getElementById('winner').innerHTML = 'Computer Win this match';
}

// console.log(playerScore);