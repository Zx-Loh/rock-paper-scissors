let humanScore = 0;
let computerScore = 0;
const options = document.querySelector("#options")
const scoreboard = document.querySelector("#results")
const humanScoreDisp = document.createElement("div")
const computerScoreDisp = document.createElement("div")



options.addEventListener("click", (event) => {
    let target = event.target

    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice())
            computerScoreDisp.textContent = `Current Comptuer Score: ${computerScore}`
            humanScoreDisp.textContent = `Current Human Score: ${humanScore}`
            scoreboard.appendChild(computerScoreDisp)
            scoreboard.appendChild(humanScoreDisp)
            break;

        case "paper":
            playRound("paper", getComputerChoice())
            computerScoreDisp.textContent = `Current Comptuer Score: ${computerScore}`
            humanScoreDisp.textContent = `Current Human Score: ${humanScore}`
            scoreboard.appendChild(computerScoreDisp)
            scoreboard.appendChild(humanScoreDisp)
            break;

        case "scissors":
            playRound("paper", getComputerChoice())
            computerScoreDisp.textContent = `Current Comptuer Score: ${computerScore}`
            humanScoreDisp.textContent = `Current Human Score: ${humanScore}`
            scoreboard.appendChild(computerScoreDisp)
            scoreboard.appendChild(humanScoreDisp)
            break;
    }
})



function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    let selection = choices[Math.floor(Math.random() * choices.length)]
    console.log(selection)
    return selection
}



function getHumanChoice () {
    let humanChoice = prompt("Pick an option: rock, paper or scissors").toLowerCase()
    console.log(humanChoice)
    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        getHumanChoice()
    }
    return humanChoice
}



function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!")
    
    } else if ((humanChoice == "paper" && computerChoice == "scissors") 
            ||  (humanChoice == "scissors" && computerChoice == "rock")
            ||  (humanChoice == "rock" && computerChoice == "paper")) {
        console.log("You lose!")
        computerScore++;

    } else if ((humanChoice == "paper" && computerChoice == "rock")
            ||  (humanChoice == "scissors" && computerChoice == "paper")
            ||  (humanChoice == "rock" && computerChoice == "scissors")) {
        console.log("You win!")
        humanScore++;
            }
    return humanScore, computerScore
}



console.log(humanScore)
console.log(computerScore)