// =========================== VARIABLES =========================== //

// declare array 'alphabet' to store all letters a user could guess
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//define object 'michaelJordan' with following properties
var michaelJordan = "jordan"

//define object 'shawnKemp' with following properties
var shawnKemp = "kemp";
    
//define object 'shaq' with following properties
var shaq = "shaq";

//define object 'olajuwon' with following properties
var hakeemOlajuwon = "olajuwon";


// declare the array 'words' to store all words that could be guessed during the game
var wordBank = [michaelJordan, shawnKemp, shaq, hakeemOlajuwon];

// declare variable wins
var wins = 0;

// declare variable guessesLeft
var guessesLeft = 10;

// declare variable wrongGuesses as empty array
var wrongGuesses = [];

// declare variable for userInput from keyboard event
var userInput;

// randomly chosen word from wordbank
var chosenWord; 

// declare currentWord which will be a word from wordBank
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("Randomly chosen word:", currentWord);

// declare variable drawnWord in order to compare 
var drawnWord = [];

// underscores will be displayed on page load and will be updated as user plays game
var underScores = [];


// =========================== FUNCTIONS =========================== //

//function init() {
    // randomly choose a word from wordBank
    // Math.floor and math.random function to randomly choose a word from the wordBank

    // ex: 
    // input --> currentWord = 'Jordan'
    // define the length of currentWord
    var currentWordLength = currentWord.length;
        console.log("length of currentWord:",currentWordLength)

   
    // add underscores to underScores array according to length of currentWord
    for (i = 0; i < currentWordLength; i++){
            underScores[i] = ' ___ ';
            // convert array into a string
            underScores.join();
            // console.log underScores array
            console.log(underScores)  
    }     
    // select HTML div by id 'chosen-word' and display underScores
    var underScores = document.getElementById('chosen-word').innerHTML = underScores;
    // display guessesLeft, wins, losses

//}

// event listener for when key is pressed
    document.onkeyup = function(event) {
    // Determines which key was pressed
     var userInput = event.key;
        // Check to see if userInput is a letter
        if (alphabet.indexOf(userInput) >=0) {
            // console.log userInput
            console.log("userInput:", userInput);
            // need to push userInput to HTML but store all guesses as an array
            for (k = 0; k < 1; k++){
                //add userinput to empty array wrongGuesses
                wrongGuesses[k] = userInput;
                console.log(wrongGuesses);
                document.getElementById('letters-guessed').innerHTML = wrongGuesses;
            }
            // check if userInput matches index of chosenWord
                   // if userInput is in chosenWord replace underscore with letter in correct position
                   // if userInput is in currentWord console.log 'in the word'
                if (currentWord.indexOf(userInput) > -1){
                        for (j = 0; j < currentWordLength; j++){
                            if (userInput = ' ___ '){
                                userInput === underScores[j];
                                console.log(underScores);
                            }
                        }
                    console.log("in the word")
                }
                else{
                    console.log("letter not in word")
                    // derease guessesLeft by 1
                    guessesLeft--;
                    // change guessesLeft in HTML
                    var guessesLeftPush =document.getElementById('guesses-remaining').innerHTML = guessesLeft;
                    }                
            }
                    // else decrease guesses remaining by 1 and add userInput to wrongGuesses array

            
        else{
            alert("You entered an invalid key")
        }
    }

 
    // if userInput in array alphabet function compare() {}
    //     if (userInput in alphabet) {
    //         console.log(userInput);
    //     }
    //     else {
    //         alert("You entered an invalid key")
    //     }
    // }
    // if userInput not in chosenWord then
        //decrease guessesremaining by 1
        //add userInput to lettersguessed
    // else replace correct index in underScores with userInput
    //else alert("you entered an invalid key")
//}


// =========================== EVENT LISTENERS =========================== //

// reset()

// var userInput = document.onKeyUp = function(event){}

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


//This functions makes note of what key user presses

    // declare variable userGuess as whatever key the user inputs


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





