const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection.toLowerCase() === "paper") {
        return "You Lose! Paper beats Rock";
      } else if (computerSelection.toLowerCase() === "rock") {
        return "Try again! Same choice";
      } else {
        return "You Win! Rock beats Scissors";
      }
      break;
    case "paper":
      if (computerSelection.toLowerCase() === "paper") {
        return "Try again! Same choice";
      } else if (computerSelection.toLowerCase() === "rock") {
        return "You Win! Paper beats Rock";
      } else {
        return "You Lose! Scissors beats Paper";
      }
      break;
    case "scissors":
      if (computerSelection.toLowerCase() === "paper") {
        return "You Win! Scissors beats Paper";
      } else if (computerSelection.toLowerCase() === "rock") {
        return "You Lose! Rock beats Scissors";
      } else {
        return "Try again! Same choice";
      }
      break;
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let outcome = false;

    while (!outcome) {
      let playerChoice = prompt("Rock, Paper or Scissors?");
      let result = playRound(playerChoice, getComputerChoice());

      if (result.charAt(4) === "W") {
        userScore++;
        outcome = true;
      } else if (result.charAt(4) === "L") {
        computerScore++;
        outcome = true;
      }
      console.log(result);
    }
  }

  return userScore > computerScore
    ? "You win the game!"
    : "You lose the game. ";
}

//console.log(game());
