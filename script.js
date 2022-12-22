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




//Make function to get the winner
function playRound(player, computer) {
  if (player == computer) return 'Draw!';
  if (player == 'rock' ) return (computer == 'scissors') ? 'Player Win!' : 'Computer Win!';
  if (player == 'paper') return (computer == 'rock') ? 'Player Win!' : 'Computer Win!';
  if (player == 'scissors') return (computer == 'paper') ? 'Player Win!' : 'Computer Win!';
  }

//Make variable to save the score
let playerScore = 0;
let computerScore = 0;

//Make score tracker with 5 rounds game
for ( let i = 0; i < 5; i++ ) {
  const computerChoice = getComputerChoice();
  //Make input from user
  let playerChoice = prompt('Pilih antara rock, paper, scissors').toLowerCase();
  const result = playRound(playerChoice, computerChoice);
  if (result === 'Player Win!') {
    playerScore++;
  } else if (result === 'computer Win!') {
    computerScore ++;
  }

  //Show the winner of this round
  console.log(`Pemenang ronde ${i + 1} adalah ${result}`);
}

//Show the final score
console.log(`Skor akhir permainan ini adalah : Pemain = ${playerScore}, Komputer = ${computerScore}`);

//Pick the winner of the game
if ( playerScore > computerScore ) {
  console.log("Pemenang permainan ini adalah Player, selamat karena mengalahkan komputer");
} else if ( playerScore < computerScore) {
  console.log("Oh tidak, Komputer menang. Sepertinya manusia kalah sekarang");
} else {
  console.log("Seri!!");
}