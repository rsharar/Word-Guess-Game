  document.onkeyup = function(event) {
    // Determines which key was pressed
     var userInput = event.key;
        // Check to see if userInput is a letter
        if (alphabet.indexOf(userInput) >=0) {
            // console.log userInput
            console.log("userInput:", userInput);
            // need to push userInput to HTML but store all guesses as an array
            for (var k = 0; k < 1; k++){
                //add userinput to empty array wrongGuesses
                wrongGuesses[k] = userInput;
                console.log(wrongGuesses);
                document.getElementById('letters-guessed').innerHTML += wrongGuesses;
            }
            // check if userInput matches index of chosenWord
                   // if userInput is in chosenWord replace underscore with letter in correct position
                   // if userInput is in currentWord console.log 'in the word'
                if (currentWord.indexOf(userInput) > -1){
                        for (var j = 0; j < currentWordLength; j++){
                            if (userInput = ' ___ '){
                                userInput === underScores[j];
                                console.log(underScores);
                            }
                        }
                    console.log("in the word")
                }
                else {
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