let humanScore = 0
let computerScore = 0

const options = document.querySelector("#options")
const scoreboard = document.querySelector("#results")

const humanChoiceDisp = document.createElement("div")
const computerChoiceDisp = document.createElement("div")
const humanScoreDisp = document.createElement("div")
const computerScoreDisp = document.createElement("div")



options.addEventListener("click", (event) => {
    let target = event.target

    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice())
            humanChoiceDisp.textContent = `You picked ${target.id}!`
            displayScores()
            break;

        case "paper":
            playRound("paper", getComputerChoice())
            humanChoiceDisp.textContent = `You picked ${target.id}!`
            displayScores()
            break;

        case "scissors":
            playRound("scissors", getComputerChoice())
            humanChoiceDisp.textContent = `You picked ${target.id}!`
            displayScores()
            break;
    }
})



function displayScores () {
    computerScoreDisp.textContent = `Current Comptuer Score: ${computerScore}`
    humanScoreDisp.textContent = `Current Human Score: ${humanScore}`
    scoreboard.appendChild(humanChoiceDisp)
    scoreboard.appendChild(computerChoiceDisp)
    scoreboard.appendChild(computerScoreDisp)
    scoreboard.appendChild(humanScoreDisp)
}



function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    let selection = choices[Math.floor(Math.random() * choices.length)]
    computerChoiceDisp.textContent = `Computer picked ${selection}!`
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