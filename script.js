function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    let selection = choices[Math.floor(Math.random() * choices.length)]
    return selection
}


function getHumanChoice () {
    let humanChoice = prompt("Pick an option: rock, paper or scissors").toLowerCase()
    console.log(humanChoice)
    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        getHumanChoice()
    }
}

console.log(getComputerChoice())
getHumanChoice()