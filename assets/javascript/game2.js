
//Create array for words
    var words = ["await", "abstract", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "export", "extends", "false", "final", "finally", "float", "for", "function", "gogo", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", "package", "protected", "private", "prototype", "public", "return", "short", "super", "static", "switch", "synchronized", "this", "throw", "throws", "true", "transient", "try", "typeof", "undefined", "var", "void", "volatile", "while", "with", "yield"];
    
    //Choose word randomly
    var word = words[Math.floor(Math.random() * words.length)];
    
    //Make array for answer
    var answer = [];
        for (var i = 0; i < word.length; i++) {
            answer[i] = "_";
        }
    
    var remainingLetters = word.length;
        
        //The playing loop
        while (remainingLetters > 0) {
            //Show players progress
            alert("This is the number of remaining letters:\n" + answer.join(" "));
            
            //Prompt player to guess
            var guess = prompt("Guess a letter or click 'Cancel' to stop the game.");
            if (prompt === null) {
                //Leave the game
                break;
            } else if (guess.length !== 1) {
                alert("Please enter one single letter.");
            } else {
                //Update match with guess
                for (var j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answer[j] = guess;
                        remainingLetters--;
                    }
                }
            }
            //End of playing loop
        }
        
        //Show answer and congratulate the player
        alert(answer.join(" "));
        alert("Good work! The right answer is " + word);
