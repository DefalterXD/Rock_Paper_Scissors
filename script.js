// ---- Player section start ---- //
const player = document.querySelector(".player");
let playerScore = document.createElement("div");
// Counter to keep score of players
let playerCounter = 0;
playerScore.textContent = playerCounter;
playerScore.setAttribute('style', "text-align:center; font-weight: 700;");
player.appendChild(playerScore);
// ---- Player section end ---- //

// ---- Computer section start ---- //
let computer = document.querySelector(".computer");
let computerScore = document.createElement("div");
// Counter to keep score of computer
let computerCounter = 0;
computerScore.textContent = computerCounter;
computerScore.setAttribute('style', "text-align:center; font-weight: 700;");
computer.appendChild(computerScore);
// ---- Computer section end ---- //

// Counter to keep score of rounds
let counter = 0;
const btns = document.querySelectorAll("button");
let textElement = document.createElement("div");
const matchResult = document.querySelector(".score");
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let select = document.querySelector(".select");
        select.style.display = 'none';
        let playerChoice = btn.className;
        let computerChoice = getComputerChoice(); 
        let matchScore = gameRound(playerChoice, computerChoice);
        textElement.textContent = matchScore;
        textElement.setAttribute('style', "text-align: center; margin-top: 3rem; font-weight: 400; font-size: 1.5rem; font-style: italic;");
        matchResult.appendChild(textElement);
            if (game(gameRound(playerChoice, computerChoice)) === true)
            {
                playerCounter++;
                playerScore.textContent = playerCounter;
            }
            // Keep scoring for computer
            else if (game(gameRound(playerChoice, computerChoice)) === false)
            {
                computerCounter++;
                computerScore.textContent = computerCounter;
            }
            // Next round
            counter++;
            if(counter === 5)
            {
                let gameResult = finalResult(playerCounter, computerCounter);
                textElement.textContent = gameResult;
                textElement.setAttribute('style', "font-size: 2rem; font-weight: 700; text-align: center; margin-top: 3rem;");
                // Put away the buttons after the winning
                const weapons = document.querySelector("#pick");
                weapons.style.display = "none";
            }
        });
    });


    
    // -------- FUNCTIONS -------- //

    // Random computer choices function
    function getComputerChoice() 
    {
    let randomChoice = Math.floor(Math.random() * 3);
    
    if (randomChoice === 1)
    {
        return 'Rock';
    }
    else if (randomChoice === 2)
    {
        return 'Paper';
    }
    else
    {
        return 'Scissors';
    }
}


// A single round function 
function gameRound(playerSelection, computerSelection)
{
    let quote;
    
    // All condtions for rock
    if (playerSelection.toUpperCase() === 'ROCK' 
    && computerSelection.toUpperCase() === 'SCISSORS')
    {
        quote = "You won! Rock beat a scissors";
        return quote;
    }
    else if (playerSelection.toUpperCase() === 'ROCK' 
    && computerSelection.toUpperCase() === 'PAPER')
    {
        quote = "You lose! Paper beat a rock";
        return quote;
    }
    else if (playerSelection.toUpperCase() === 'ROCK' 
    && computerSelection.toUpperCase() === 'ROCK')
    {
        quote = "Draw! Rock can't beat a rock";
        return quote;
    }

    // All conditions for paper
    if (playerSelection.toUpperCase() === 'PAPER' 
    && computerSelection.toUpperCase() === 'ROCK')
    {
        quote = "You won! Paper beat a rock";
        return quote;
    }
    else if (playerSelection.toUpperCase() === 'PAPER' 
    && computerSelection.toUpperCase() === 'SCISSORS')
    {
        quote = "You lose! Scissors beat a paper";
        return quote;
    }
    else if (playerSelection.toUpperCase() === 'PAPER' 
    && computerSelection.toUpperCase() === 'PAPER')
    {
        quote = "Draw! Paper can't beat a paper";
        return quote;
    }
    
    // All conditions for scissors
    if (playerSelection.toUpperCase() === 'SCISSORS' 
    && computerSelection.toUpperCase() === 'PAPER')
    {
        quote = "You won! Scissors beat a paper";
        return quote;
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' 
    && computerSelection.toUpperCase() === 'ROCK')
    {
        quote = "You lose! Rock beat a scissors";
        return quote;
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' 
    && computerSelection.toUpperCase() === 'SCISSORS')
    {
        quote = "Draw! Scissors can't beat a scissors";
        return quote;
    }
    else
    {
        quote = "Pick your button!";
        return quote;
    }
}

// Function for checking either player won or not
function game(gameRound)
{
    // If the string quote has first 'You won!'
    if (gameRound.slice(0,8) === 'You won!')
    {
        return true;
    }
    // If the string quote has first 'You lose!'
    else if (gameRound.slice(0,9) === 'You lose!')
    {
        return false;
    }
    // For draw quote
    else
    {
        return;
    }
}

// Final result with keep score from previous steps
function finalResult(playerCounter, computerCounter)
{
    if (playerCounter > computerCounter)
        {
            return "You win! Congrats!";
        }
        else if (computerCounter > playerCounter)
        {
            return "You lose! Maybe next time!";
        }
        else
        {
            return "Draw! Nice match!";
        }
}

    // -------- FUNCTIONS END -------- //