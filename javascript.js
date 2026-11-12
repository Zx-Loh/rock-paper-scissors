let humanScore = 0;
let computerScore = 0;
const results = document.querySelector("#results");

function getComputerChoice()
{
    // Returns a random number 0, 1 or 2
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0)
    {
        return "rock";
    }    
    else if (randomNumber == 1)
    {
        return "paper";
    }
    else if (randomNumber == 2)
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock")
    {
        return "rock";
    }
    else if (humanChoice == "paper")
    {
        return "paper";
    }
    else if (humanChoice == "scissors")
    {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice)
{
    const roundResult = document.createElement("p");

    if (humanChoice == computerChoice)
    {
        roundResult.textContent = "Draw!";
        results.appendChild(roundResult);
        return
    }

    if (humanChoice == "rock")
    {
        if (computerChoice == "paper")
        {
            roundResult.textContent = "You lose! Paper beats rock";
            computerScore++;
        }
        else
        {
            roundResult.textContent = "You win! Rock beats scissors";
            humanScore++;
        }
    }
    else if (humanChoice == "paper")
    {
        if (computerChoice == "rock")
        {
            roundResult.textContent = "You win! Paper beats rock";
            humanScore++;
        }
        else
        {
            roundResult.textContent = "You lose! Scissors beats paper";
            computerScore++;
        } 
    }
    else
    {
        if (computerChoice == "rock")
        {
            roundResult.textContent = "You lose! Rock beats scissors";
            computerScore++;
        }
        else 
        {
            roundResult.textContent = "You win! Scissors beats paper";
            humanScore++;
        }
    }

    // Append the result of this round to the results div
    results.appendChild(roundResult);

    // Update current score display
    const playerScoreDisp = document.querySelector("#human");
    const computerScoreDisp = document.querySelector("#computer");

    playerScoreDisp.textContent = humanScore;
    computerScoreDisp.textContent = computerScore;

    // Check if either player has reached 5 points
    if (computerScore >= 5 || humanScore >= 5)
    {
        const winner = document.createElement("p");

        if (computerScore > humanScore)
        {
            winner.textContent = "You lose!";
        }
        else
        {
            winner.textContent = "You win!";
        }

        results.appendChild(winner);
    }
}



// Get list of all buttons in document
const buttons = document.querySelectorAll("button");

// For each button, add click event listener
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.value, getComputerChoice());
    });
})