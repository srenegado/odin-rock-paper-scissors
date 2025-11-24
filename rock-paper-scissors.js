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

// console.log(getComputerChoice());