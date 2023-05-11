var player;
var computer;

var playerScore = 0;
var computerScore = 0;
var gameCounter = 0 ;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    var playerChoice = button.id;
    var computerChoice = getComputerChoice();
    var outcome = playRound(playerChoice,computerChoice);
    gameCounter++;
    changeResults(playerChoice,computerChoice,outcome);
  });
});

function getComputerChoice(){
    var rps_choices = ['Rock', 'Paper', 'Scissor']; // This is an array with the possible choices
    var choice = rps_choices[Math.floor(Math.random()*3)]; // This is a random selection of a choice from the array
    computer = choice;
    console.log("computer decision")
    return computer;
}

function getPlayerChoice(){
    const formElement = document.forms["playerOptions"];
    const selectElement = formElement.elements["options"];
    const selectedOptionElement = selectElement.options[selectElement.selectedIndex];
    const selectedOptionText = selectedOptionElement.text;
    player = selectedOptionText
    console.log("player decision")
    return player;
}

function playRound(playerSelection, computerSelection){
    var outcome; 
    if (playerSelection == computerSelection){
        //return "Try again! You drew"
        outcome = "It's a draw!";
    }
    else if ( (playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissor") || (playerSelection == "Scissor" && computerSelection == "Rock")  ){
        //return "Computer won! "+computerSelection+" beats"+playerSelection;
        outcome = "Computer won! "+computerSelection+" beats "+playerSelection;
        computerScore++;
    }
    else{
        //return "Player won! "+playerSelection+" beats"+computerSelection;
        outcome = "Player won! "+playerSelection+" beats "+computerSelection;
        playerScore++;
    }

    return outcome
  }

  function changeResults(player,computer,result){
    document.getElementById("playerScore").innerHTML = player;
    document.getElementById("computerScore").innerHTML = computer;
    document.getElementById("result").innerHTML = result;
    document.getElementById("score").innerHTML = "Computer "+computerScore+" : Player "+playerScore;
    if (gameCounter == 5){
        var winner;
        if (playerScore > computerScore){
            winner = "Player is the Winner!";
        }
        else{
            winner = "Computer is the Winner!"
        }
        document.getElementById("winner").innerHTML = winner;
        gameCounter = 0;
        playerScore = 0;
        computerScore = 0;
    }
    else{
        document.getElementById("winner").innerHTML = "game on-going...";
    }
  }

function getDecisions(){
    var element = document.getElementById("decisions"); 
    element.innerHTML = "Player: "+player +" & Computer: "+computer; 
}

function game(playerSelection){
    var playerCount;
    var computerCount;
    for (let step = 0; step < 5; step++) {
        console.log("Game"+step);
        var outcome = playRound(playerSelection, getComputerChoice());
        var htmlElement = "outcomeOfG"+(step+1);
        if (outcome.startsWith("Player won!")){
            // player won
            playerCount++;
        }
        if (outcome.startsWith("Computer won!")){
            // the computer won
            computerCount++;
        }
        else{
            // it was a draw and we'll give both a point (because why not)
            playerCount++;
            computerCount++;
        }
        var element = document.getElementById(htmlElement); // This is a reference to the HTML element with an id of "playerChoice"
        element.innerHTML = outcome; // This updates the content of the element with the result of the function
      }
    var winnerElement = document.getElementById("overallWinner"); // This is a reference to the HTML element with an id of "playerChoice"
    if (playerCount > computerCount){
        winnerElement.innerHTML = "Player Won! "+ score; 
    }
    else{
        winnerElement.innerHTML = "Computer Won! "+ score; 
    }
}