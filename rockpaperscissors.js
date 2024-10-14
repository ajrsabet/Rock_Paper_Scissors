// 1. Rock, Paper, Scissors

// Write a program that plays the popular rock-paper-scissors game. 
// The program randomly generates a number 0, 1, or 2 representing rock, paper, and scissors. 
// The program prompts the user to enter "rock", "paper", or "scissors" and then 
// displays a message indicating whether the "Player wins", "Computer wins" or "It's a draw".
// Handle situations where the user enters a word other than those prompted. 


// Keep score
var score = [0,0];
var session = true;

console.log("Would you like to play rock paper scissors? ");


while (session) {
    // computer's turn, random
    var compTurn = Math.floor( Math.random() * 3 );
    console.log(compTurn);
    
    // player's turn
    let playTurn = prompt("Rock(0), paper(1), scissors(2), or end(3)");

    // compare turns
    if (playTurn == 3){
        session = false;
    } else if (playTurn == compTurn) {
        // tie
    } else if (playTurn == 0 && compTurn == 1) {
        // player wins
        score[0] ++;        
    } else if (playTurn == 1 && compTurn == 2) {
        // player wins
        score[0] ++;        
    } else if (playTurn == 2 && compTurn == 0) {
        // player wins
        score[0] ++;
    } else {
        // player looses
        score[1] ++;
    }

    // play again?
    console.log("Score: You " + score[0] + " | Computer " + score[1]);

}

console.log("Good bye ");
    