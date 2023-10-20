// Counter to keep score 
let playerCounter = 0;
let computerCounter = 0;

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
    // If the prompt was typed wrong
    else
    {
        quote = "Invalid selection!";
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

// Loop for 5 round each
for(let i = 0; i < 5; i++)
{
    // All new arguments after each i-th
    let playerChoice = prompt("Enter your choice: ", "");
    let computerChoice = getComputerChoice();
    // Review every round through 'alert viewport'
    alert(gameRound(playerChoice, computerChoice));
    // Keep scoring for player
    if (game(gameRound(playerChoice, computerChoice)) === true)
    {
        playerCounter++;
    }
    // Keep scoring for computer
    else if (game(gameRound(playerChoice, computerChoice)) === false)
    {
        computerCounter++;
    }
}

// Final result with keep score from previous steps
if (playerCounter > computerCounter)
    {
        alert("You win! Congrats!");
    }
    else if (computerCounter > playerCounter)
    {
        alert("You lose! Try again!");
    }
    else
    {
        alert("Draw! Nice match!");
    }