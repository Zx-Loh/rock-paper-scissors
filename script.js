let hunmanScore = 0;
let computerScore = 0;



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
        hunmanScore++;
            }
    return hunmanScore, computerScore
}



console.log(hunmanScore)
console.log(computerScore)