
function wordle(target, guess){

    var one = target.charAt(0);
    var two = target.charAt(1);
    var three = target.charAt(2);
    var four = target.charAt(3);
    var five = target.charAt(4);

    // - the fourth letter doesn't appear in the word twice 

    for (i = 0; i < 5; i++) {
        console.log("target = " + target.charAt(i))
        for (n = 0; n < 5; n++) {
            console.log("guess = " + guess.charAt(n))
            if (target.charAt(i) == guess.charAt(n)) {
                if (i == 0 && n == 0) {
                    console.log("The first letter is in the correct position")
                }
                if (i == 1 && n == 1) {
                    console.log("The second letter is in the correct position")
                }
                if (i == 2 && n == 2) {
                    console.log("The third letter is in the correct position")
                }
                if (i == 3 && n == 3) {
                    console.log("The fourth letter is in the correct position")
                }
                if (i == 4 && n == 4) {
                    console.log("The fifth letter is in the correct position")
                }
            }
        }
    }

    if (target.charAt(4) == guess.charAt(4)) {
        console.log("The fifth letter is in the correct position")
        console.log("bb")
        for (i = 0; i < 5; i++) {
            if (target.charAt(i) == guess.charAt(i)){
                console.log("yes")
            }
        }
    }

    //- the fifth letter apears in the word, but in a different position.
    
}

wordle("scope", "scpee");







// Write a JavaScript function function wordle(target, guess) with the following specification: 
// The function should take two five letter words and

// - report which of the of the letters in guess appear in the word in the correct location,
// - which latters appear in the word in a different location,
// - and which letters do not appear in the word.
// - It should print an error message if both words do not have five letters, or are otherwise the incorrect type. 
// For example: wordle(scope, scoop) should produce the output:
// - The first letter is in the correct position
// - the second letter is in the correct position
// - the third letter is in the correct position
// - the fourth letter doesn't appear in the word twice 
// - the fifth letter apears in the word, but in a different position.
// Note the twice for the fourth letter is optional, but this reflects the nature of the feedback given by Wordle.