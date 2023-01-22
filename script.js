
  const buttonR = document.getElementById("click-r"); 
  buttonR.addEventListener('click', myClickR);

  const buttonP = document.getElementById("click-p"); 
  buttonP.addEventListener('click', myClickP);

  const buttonS = document.getElementById("click-s"); 
  buttonS.addEventListener('click', myClickS);

  const buttonNewGame = document.getElementById("btn-r");
  buttonNewGame.addEventListener('click', restartGame);

  const buttonNewGame1 = document.getElementById("btn-r1");
  buttonNewGame1.addEventListener('click', restartGame);


  let r = "rock";
  let p = "paper";
  let s = "scissors";
  var getPlayerChoice = " ";



function getComputerChoice() {

const elements = [p,r,s];

const random = Math.floor(Math.random() * elements.length);

if (random === 0) {
  return p;
} else if (random === 1) {
  return r
} else if (random === 2) {
  return s
}

}



let playerScore = 0;
let computerScore = 0;
let tie = 0;

  function gameRound(){
    
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice;
    
    
    
   if  (playerSelection == r) {
      if (computerSelection == s) {
        rockNone1.style.cssText = "display: none;";
        paperkNone1.style.cssText = "display: none;";
        scissorsNone1.style.cssText = "display: inline;";
        return playerScore += 1;
      } else if (computerSelection == p) {
        rockNone1.style.cssText = "display: none;";
        scissorsNone1.style.cssText = "display: none;";
        paperkNone1.style.cssText = "display: inline;";
        return computerScore  += 1;
      } else {
        rockNone1.style.cssText = "display: inline;";
        scissorsNone1.style.cssText = "display: none;";
        paperkNone1.style.cssText = "display: none;";
        return tie += 1;
      }
   }
   if  (playerSelection == s) {
      if (computerSelection == p) {
        rockNone1.style.cssText = "display: none;";
        scissorsNone1.style.cssText = "display: none;";
        paperkNone1.style.cssText = "display: inline;";
        return playerScore += 1;
      } else if (computerSelection == r) {
        rockNone1.style.cssText = "display: inline;";
        scissorsNone1.style.cssText = "display: none;";
        paperkNone1.style.cssText = "display: none;";
        return computerScore += 1;
      } else {
        rockNone1.style.cssText = "display: none;";
        paperkNone1.style.cssText = "display: none;";
        scissorsNone1.style.cssText = "display: inline;";
        return tie += 1;
      }
   }

   if  (playerSelection == p) {
      if (computerSelection == r) {
        rockNone1.style.cssText = "display: inline;";
        scissorsNone1.style.cssText = "display: none;";
        paperkNone1.style.cssText = "display: none;";
        return playerScore += 1;
      } else if (computerSelection == s) {
        rockNone1.style.cssText = "display: none;";
        paperkNone1.style.cssText = "display: none;";
        scissorsNone1.style.cssText = "display: inline;";
        return computerScore += 1;
      } else {
        rockNone1.style.cssText = "display: none;";
        scissorsNone1.style.cssText = "display: none;";
        paperkNone1.style.cssText = "display: inline;";
        return tie += 1;
      }
   }

  }
   
const el = document.getElementById("res-pl");
const el1 = document.getElementById("res-comp");
const el3 = document.getElementById("res-tie");
const rockNone = document.getElementById("rock-none");
const paperNone = document.getElementById("paper-none");
const scissorsNone = document.getElementById("scissors-none");
const rockNone1 = document.getElementById("rock1-none");
const paperkNone1 = document.getElementById("paper1-none");
const scissorsNone1 = document.getElementById("scissors1-none");
const alertPlWon = document.getElementById("alert-pl-won-container");
const alertCompWon = document.getElementById("alert-comp-won-container");


  function myClickR() { 
    getPlayerChoice = "rock";
    paperNone.style.cssText = "display: none;";
    scissorsNone.style.cssText = "display: none;";
    rockNone.style.cssText = "display: inline;";
    gameRound()
   
    if (playerScore >= 0 || computerScore >= 0 || tie >= 0) {
        el.innerHTML = playerScore;
        el1.innerHTML = computerScore;
        el3.innerHTML = tie;
      } 
      if (playerScore >= 5){
        alertPlWon.style.cssText = "display: inline;";
      } else if (computerScore >= 5)
      alertCompWon.style.cssText = "display: inline;";
        

    
  }
  

  function myClickP() {
    getPlayerChoice = "paper";
    paperNone.style.cssText = "display: inline;";
    scissorsNone.style.cssText = "display: none;";
    rockNone.style.cssText = "display: none;";
    gameRound()
    
    
    if (playerScore >= 0 || computerScore >= 0 || tie >= 0) {
        el.innerHTML = playerScore;
        el1.innerHTML = computerScore;
        el3.innerHTML = tie;
      } 
       if (playerScore >= 5){
        alertPlWon.style.cssText = "display: inline;";
      } else if (computerScore >= 5)
      alertCompWon.style.cssText = "display: inline;";
    
  }

  function myClickS() {
    getPlayerChoice = "scissors";
    paperNone.style.cssText = "display: none;";
    scissorsNone.style.cssText = "display: inline;";
    rockNone.style.cssText = "display: none;";
    gameRound()
   
    
    if (playerScore >= 0 || computerScore >= 0 || tie >= 0) {
        el.innerHTML = playerScore;
        el1.innerHTML = computerScore;
        el3.innerHTML = tie;
      } 
      if (playerScore >= 5){
        alertPlWon.style.cssText = "display: inline;";
      } else if (computerScore >= 5)
        alertCompWon.style.cssText = "display: inline;";
  }
  
  
  function restartGame () {
    
    alertPlWon.style.cssText = "display: none;";
    alertCompWon.style.cssText = "display: none;";

    playerScore = 0;
    computerScore = 0;
    tie = 0;  

    el.innerHTML = "0";
    el1.innerHTML = "0";
    el3.innerHTML = "0";

    rockNone.style.cssText = "display: none;";
    scissorsNone.style.cssText = "display: none;";
    paperNone.style.cssText = "display: none;";

    rockNone1.style.cssText = "display: none;";
    scissorsNone1.style.cssText = "display: none;";
    paperkNone1.style.cssText = "display: none;";

  }