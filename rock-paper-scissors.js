function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const results = document.querySelector(".results");
  const moves = document.querySelector(".moves");
  const score = document.querySelector(".score");
  score.textContent = `Score: ${humanScore}-${computerScore}`;
  
  function playRound(humanChoice, computerChoice) {
    const win = ( 
      (humanChoice === "rock" && computerChoice === "scissors") 
      || (humanChoice === "paper" && computerChoice === "rock")
      || (humanChoice === "scissors" && computerChoice === "paper")
    );
    const draw = (humanChoice === computerChoice);

    if (win) {
      humanScore++;
      results.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    }
    else if (draw) {
      results.textContent = `Draw! You both chose ${humanChoice}.`;
    } else {
      computerScore++;
      results.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    } 
  }

  function handleMoveSelection(event) {
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
  }

  function updateScoreAndResults() {
    score.textContent = `Score: ${humanScore}-${computerScore}`;
    
    const humanWon = humanScore >= 5;
    const computerWon = computerScore >= 5;
    if (humanWon || computerWon) {
      results.textContent = (humanWon) 
        ? "You won the game!" : "You lost the game!";
      moves.removeEventListener("click", handleMoveSelection);
      moves.removeEventListener("click", updateScoreAndResults);
    }
  }

  moves.addEventListener("click", handleMoveSelection);
  moves.addEventListener("click", updateScoreAndResults);
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