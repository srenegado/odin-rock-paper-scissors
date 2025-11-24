function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
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

  let humanChoice = "";
  let computerChoice = "";
  for (let round = 1; round <= 5; round++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    // console.log(humanChoice);
    // console.log(computerChoice);

    playRound(humanChoice, computerChoice);

    // console.log(humanScore);
    // console.log(computerScore);
  }

  console.log(`Score: ${humanScore}-${computerScore}`)
  if (humanScore > computerScore)
    console.log("You won the game!");
  else if (humanScore === computerChoice)
    console.log("A draw!");
  else
    console.log("You lost the game!")
}

function getComputerChoice() {
  let randNum = Math.random();
  // console.log(randNum);

  let firstBound = 0.33;
  let secondBound = 0.66;

  if (randNum < firstBound) 
    return "rock";
  else if (randNum < secondBound) 
    return "paper";
  else 
    return "scissors";
}

function getHumanChoice() {
  return prompt("Throw a hand sign!"); // assumes valid input
}

playGame();