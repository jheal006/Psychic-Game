//Establish Variables

var wins = 0;
var losses = 0;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var html = '';
var guessesLeft = 10;
var guesses = [];


// Game Run
  html = "<h1>Press Any Button to Start the ~Psychic Game~</h1>";
  document.querySelector(".game").innerHTML = html;

document.onkeyup = function(event) {


  //Create a variable to print to the document.
   html =
  "<h1>Psychic Game</h1> <br>" +
  "<h2>Guess what letter I am thinking of?</h2>" +
  "<p>Wins: " + wins +
  "</p><p>Losses: " + losses +
  "</p><p>Guesses Left: " + guessesLeft + "</p>" +
  "<p>Current Guesses: " + guesses.join(', ') + "</p>";


  if (guessesLeft != 1) {

     var userInput = String.fromCharCode(event.keyCode).toLowerCase();

     //Functions
     var computerGuess = alphabet[(Math.floor(Math.random()*alphabet.length))];

     //Game

     if (userInput === computerGuess) {
      // Win Condition: Add 1 to the win column, Reset Guesses Array
       wins += 1;
       guessesLeft = 10;
       guesses.push(userInput);
       guesses = [];
     } else if (userInput !== computerGuess) {
       //Countdown Guesses
       guessesLeft -= 1;
       guesses.push(userInput);
     }

   } else if (guessesLeft === 1) {
     // Loss Condition: Add 1 to the loss column, Reset Guesses Array
       losses += 1;
       guessesLeft = 10;
       guesses = [];
    };

  document.querySelector(".game").innerHTML = html;
};
