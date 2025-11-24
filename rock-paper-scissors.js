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

// console.log(getComputerChoice());
// console.log(getHumanChoice());