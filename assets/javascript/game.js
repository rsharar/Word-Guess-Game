


// =========================== VARIABLES =========================== //

// declare array 'alphabet' to store all letters a user could guess
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//define object 'michaelJordan' with following properties
var michaelJordan = {
    lastname: "Jordan",
    team: "Chicago Bulls",
    jersey: 23,
    inhall: true
}
//define object 'shawnKemp' with following properties
var shawnKemp = {
    lastname: "Kemp",
    team: "Seattle SuperSonics",
    jersey: 40,
    inhall: false
}
//define object 'shaq' with following properties
var shaq = {
    lastname: "ONeal",
    team: "Los Angeles Lakers",
    jersey: 32,
    inhall: true
}

// declare the array 'words' to store all words that could be guessed during the game
var wordBank = [michaelJordan, shawnKemp, shaq];

// declare variable wins
var wins = 0;

// declare variable guessesLeft
var guessesLeft = 10;

// declare variable wrongGuesses as empty array
var wrongGuesses = [];

// declare variable for userInput from keyboard event
var userInput 

// randomly chosen word from wordbank
var chosenWord = 

// declare currentWord which will be a word from wordBank
var currentWord = 

// declare variable drawnWord in order in order to compare 
var drawnWord = [];

// underscores will be displayed on page load and will be updated as user plays game
var underScores = [];


// =========================== FUNCTIONS =========================== //

// function reset() {
    // randomly choose a word from wordBank
    // Math.floor and math.random function to randomly choose a word from the wordBank

    // ex: 
    // input --> currentWord = 'Jordan'
    // define the length of currentWord
    // add underscores to underScores array according to length of currentWord
    // output --> ['_', '_', '_', '_', '_',]
    // TODO:
    // need to write syntax using current word as our input and this should output array of underscores according to length of currentWord
    // convert array into a string
    // select HTML and display underScores
    // display guessesLeft, wins, losses
//}


// function compare() {
    //
//}


// =========================== EVENT LISTENERS =========================== //
// on page load execute our reset function
// reset()

// use document.onKeyUp = function(event){
    // userGuess = <value from event object>


    // ex:
    // currentWord = 'jordan'
    // userGuess = 'j'
    // if userGuess guesses a correct letter, check to see if userGuess equals a letter in the array

    // if() {
        // update the underscores array
        // output --> ['j', '_', '_', '_', '_', '_',]
    //}
      //  else {
            // push wrong letter into wrongGuesses array
            // decrease guessesLeft by 1
        //}
//}


console.log(words)

//This functions makes note of what key user presses
document.onKeyUp = function (event){

    // declare variable userGuess as whatever key the user inputs
    var userGuess = event.key
        if (userGuess in words){
            console.log("Valid guess");
        }
        else {
            console.log("Invalid key")
        }
}


// Pseduo Code Review



// Use cases:
// #1: The user loads the page
    // Display underscores according to randomly selected word
    // Display # guesses remaining, # wins, # losses
// #2: User clicks a letter between a-z
    // If user guesses a letter that's in the word, display the letter in its appropriate position, else guesses remaining decreases by 1 AND display the letter in the 'letter guessed' region
    // If guesses remaining = 0, user loses
    // If user guesses the last correctly letter, they win. Increase wins by 1.



// structure of script
    var userGuess = document.keyup()





