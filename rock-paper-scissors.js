function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let win = ( 
      (humanChoice === "rock" && computerChoice === "scissors") 
      || (humanChoice === "paper" && computerChoice === "rock")
      || (humanChoice === "scissors" && computerChoice === "paper")
    );
    let draw = (humanChoice === computerChoice);

    if (win) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    }
    else if (draw) {
      console.log(`Draw! You both chose ${humanChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    } 
  }

  const moves = document.querySelector(".moves");
  moves.addEventListener("click", (event) => {
    const playerSelection = event.target;
    const computerChoice = getComputerChoice();
    switch (playerSelection.className) {
      case "rock":
        playRound("rock", computerChoice);
        break;
      case "paper":
        playRound("paper", computerChoice);
        break;
      case "scissors":
        playRound("scissors", computerChoice);
        break; 
    }
  })

  // console.log(`Score: ${humanScore}-${computerScore}`)
  // if (humanScore > computerScore) {
  //   console.log("You won the game!");
  // } else if (humanScore === computerScore) {
  //   console.log("A draw!");
  // } else {
  //   console.log("You lost the game!")
  // }
}

function getComputerChoice() {
  let randNum = Math.random();
  const FIRST_THIRD_UPPER_BOUND = 0.33;
  const SECOND_THIRD_UPPER_BOUND = 0.66;

  if (randNum < FIRST_THIRD_UPPER_BOUND) {
    return "rock";
  } else if (randNum < SECOND_THIRD_UPPER_BOUND) { 
    return "paper";
  } else {
    return "scissors";
  }
}

playGame();