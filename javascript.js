let humanScore = 0;
let computerScore = 0;

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
    if (humanChoice == computerChoice)
    {
        console.log("Draw!");
        return
    }

    if (humanChoice == "rock")
    {
        if (computerChoice == "paper")
        {
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
        else
        {
            console.log("You win! Rock beats scissors");
            humanScore++;
        }
    }
    else if (humanChoice == "paper")
    {
        if (computerChoice == "rock")
        {
            console.log("You win! Paper beats rock");
            humanScore++;
        }
        else
        {
            console.log("You lose! Scissors beats paper");
            computerScore++;
        } 
    }
    else
    {
        if (computerChoice == "rock")
        {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }
        else 
        {
            console.log("You win! Scissors beats paper!")
            humanScore++;
        }
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