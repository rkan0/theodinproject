// console.log("hello world")

// step 2

function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored-minCeiled) + minCeiled);
}


function getComputerChoice() {
    let value = getRandomNumber(0,2);
    let choice = ""
    if (value == 0) {
        choice = "Rock"
    } else if (value == 1) {
        choice = "Paper" 
    } else {
        choice = "Scissors"
    }
    console.log("computer choice = " + choice)
    return choice
}


// step 3

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors? ");
    let choice_s = String(choice).charAt(0).toUpperCase() + String(choice).slice(1).toLowerCase();
    console.log("human choice = " + choice_s)
    return choice_s
}



// step 6

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let result = ""; 
    function playRound(humanChoice, computerChoice) {
       
        if (humanChoice === computerChoice) {
            result = "Draw"
        } else if (humanChoice === "Rock") {
            if (computerChoice === "Paper") {
                result = "You lose; rock < paper"
            } else { // comp = scissors
                result = "You win; rock > scissors"
            }
        } else if (humanChoice === "Paper") {
            if (computerChoice === "Rock") {
                result = "You win; paper > rock"
            } else { // comp = scissors
                result = "You lose; paper < scissors"
            }
        } else { // human = scissors
            if (computerChoice === "Rock") {
                result = "You lose; scissors < rock"
            } else { // comp = paper
                result = "You win; scissors > paper"
            }
        }

        // console.log("Round " + i + ": " + result)
        if (result.includes("win")) {
            humanScore++
        } else if (result.includes("lose")) {
            computerScore++
        }

    }

    for (let i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection) 
        console.log("Round " + i + ": " + result)
    }
    
    console.log("human final score: " + humanScore)
    console.log("computer final score: " + computerScore)
    if (humanScore>computerScore) {
        console.log("final results: you win!")
    } else if (humanScore<computerScore) {
        console.log("final results: you lose!")
    } else {
        console.log("final results: it's a draw!")
    }
    
}

playGame()

/*
learnings
- put the if condition in ()
- check a var is defined at the top level of fx and just reassign value inside if, instead of redefining
*/ 

