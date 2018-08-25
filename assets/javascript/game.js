// =========================== VARIABLES =========================== //

// declare array 'alphabet' to store all letters a user could guess
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// declare the array 'words' to store all words that could be guessed during the game
var wordBank = ['jordan', 'kemp', 'olajuwon', 'shaq', 'hardaway', 'payton', 'pippen', 'barkley', 'hill', 'ewing', 'stockton', 'malone'];

// declare variable wins
var wins = 0;

// declare variable guessesLeft
// decrease by 1 with each incorrect guess
var guessesLeft = 10;

// declare variable wrongGuesses as empty array
var lettersGuessed = [];

// declare variable for userInput from keyboard event
var userInput;

// declare currentWord which will be a word from wordBank
var currentWord;

// declare variable drawnWord in order to compare 
var drawnWord = [];

// underscores will be displayed on page load and will be updated as user plays game
var underScores = [];

//global variable
var s;

// =========================== FUNCTIONS =========================== //

//function init() {
// Math.floor and math.random function to randomly choose a word from the wordBank

// ex: 
// input --> currentWord = 'Jordan'
// define the length of currentWord

// 1. Determine word for the game
// randomly choose word

var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log("Randomly chosen word:", currentWord);

// determine length of currentWord
var cwLength = currentWord.length;
console.log("length of currentWord:", cwLength)

// 2. Set # of underscores according to word length
for (i = 0; i < cwLength; i++) {
    underScores.push("__ ");
    s = underScores.join("");
    console.log(s)
}

// select HTML div by id 'chosen-word' and display underScores
document.getElementById('chosen-word').innerHTML = s;


// event listener for when key is pressed
document.onkeyup = function (event) {
    // Determines which key was pressed
    var userInput = event.key;
    // Check to see if userInput is a letter
    if (alphabet.indexOf(userInput) >= 0) {
        // console.log userInput
        console.log("userInput:", userInput);
        // need to push userInput to HTML but store all guesses as an array
        for (var k = 0; k < 1; k++) {
            //add userinput to empty array lettersGuessed
            lettersGuessed[k] = userInput;
            console.log(lettersGuessed);
            //add guessed letter to HTML
            document.getElementById('letters-guessed').innerHTML += lettersGuessed;
        }
        if (currentWord.indexOf(userInput) > -1) {
            for (var j = 0; j < cwLength; j++) {
                if (currentWord[j] === userInput) {
                    underScores[j] = userInput;
                }
                console.log(underScores);
                // display guessed letters to HTML
                document.getElementById('chosen-word').innerHTML = underScores;
                if (!underScores.includes("__ ")){
                    underScores.join("");
                    alert("Congratulations! You win!")
                    wins++;
                    document.getElementById('wins').innerHTML = wins;

                }
                
            }
        }
    
    else {
        console.log("letter not in word")
        // derease guessesLeft by 1
        guessesLeft--;
        // change guessesLeft in HTML
        var guessesLeftPush = document.getElementById('guesses-remaining').innerHTML = guessesLeft;
            if (guessesLeft === 0){
                alert("Game Over! Better luck next time.")
            }
    }
}
}
//     else {
//     // warn user 
//     alert("You entered an invalid key. Please enter a letter.");
// }

// =========================== EVENT LISTENERS =========================== //








