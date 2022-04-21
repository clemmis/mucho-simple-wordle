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
// - the fifth letter apears in the word, but in a different position.
// - the fourth letter doesn't appear in the word twice

function wordle(target, guess){

    // Array for target and guess word
    let targetarr = []
    let guessarr = []

    // Ensure arrays only contain letters
    if (targetarr.includes(!/[^a-zA-Z]/)) {console.log("Target word may only contain characters a-z please")}

   // if (!/[^a-zA-Z]/.test(target) == false) {console.log("Target word may only contain characters a-z please")}
    if (!/[^a-zA-Z]/.test(guess) == false) {console.log("Guess word may only contain characters a-z please")}

    // Array for both words together so givenwords[0] is first letter of target and givenwords[5] is first letter of guess
    let givenwords = []

    // Pushes letters of target word to array
    for (i = 0; i < target.length; i++) {
            givenwords.push(target.charAt(i))
            targetarr.push(target.charAt(i))}

    // Pushes letters of guess word to array
    for (i = 0; i < guess.length; i++) {
            givenwords.push(guess.charAt(i))
            guessarr.push(guess.charAt(i))}

    // Declaring "switches" - if these variables are not changed to true in the ifs below, something needs to happen
    var a = false;
    var b = false;
    var c = false;
    var d = false;
    var e = false;

    // Check if letters are in the correct position
    if (givenwords[0] == givenwords[5]) {a = true && console.log("The first letter is in the correct position")}     // a = character in pos 0
    if (givenwords[1] == givenwords[6]) {b = true && console.log("The second letter is in the correct position")}    // b = character in pos 1
    if (givenwords[2] == givenwords[7]) {c = true && console.log("The third letter is in the correct position")}     // c = character in pos 2
    if (givenwords[3] == givenwords[8]) {d = true && console.log("The fourth letter is in the correct position")}    // d = character in pos 3
    if (givenwords[4] == givenwords[9]) {e = true && console.log("The fifth letter is in the correct position")}     // e = character in pos 4

    // If a/b/c/d/e is false after the above, the letter is not in the correct position. 
    // We then need to check if character a/b/c/d/e in the guess word is included in the target word at all
    // and count how many times it appears.

    // a
    if (a == false && targetarr.includes(guess.charAt(0)) == true) {
        // count the occurrence of a in target array
        const counts = {};
        for (const num of guessarr) {counts[num] = counts[num] ? counts[num] + 1 : 1;}
        var occurrenceCount = counts[guess.charAt(0)]

        // if count of letter > 1
        if (occurrenceCount > 1) {console.log("The first letter doesn't appear in the word twice")}

        // if count of letter is only 1 do this
        else {console.log("The first letter apears in the word, but in a different position.")}
    }

    // b
    if (b == false && targetarr.includes(guess.charAt(1)) == true) {
        // count the occurrence of b in target array
        const counts = {};
        for (const num of guessarr) {counts[num] = counts[num] ? counts[num] + 1 : 1;}
        var occurrenceCount = counts[guess.charAt(1)]

        // if count of letter > 1 
        if (occurrenceCount > 1) {console.log("The second letter doesn't appear in the word twice")}

        // if count of letter is only 1 do this
        else {console.log("The second letter apears in the word, but in a different position.")}
    }

    // c
    if (c == false && targetarr.includes(guess.charAt(2)) == true) {
        // count the occurrence of c in target array
        const counts = {};
        for (const num of guessarr) {counts[num] = counts[num] ? counts[num] + 1 : 1;}
        var occurrenceCount = counts[guess.charAt(2)]

        // if count of letter > 1
        if (occurrenceCount > 1) {console.log("The third letter doesn't appear in the word twice")}

        // if count of letter is only 1 do this
        else {console.log("The third letter apears in the word, but in a different position.")}
    }

    // d
    if (d == false && targetarr.includes(guess.charAt(3)) == true) {
        // count the occurrence of d in target array
        const counts = {};
        for (const num of guessarr) {counts[num] = counts[num] ? counts[num] + 1 : 1;}
        var occurrenceCount = counts[guess.charAt(3)]

        // if count of letter > 1
        if (occurrenceCount > 1) {console.log("The fourth letter doesn't appear in the word twice")}

        // if count of letter is only 1 do this
        else {console.log("The fourth letter apears in the word, but in a different position.")}
    }

    // e
    if (e == false && targetarr.includes(guess.charAt(4)) == true) {
        // count the occurrence of e in target array
        const counts = {};
        for (const num of guessarr) {counts[num] = counts[num] ? counts[num] + 1 : 1;}
        var occurrenceCount = counts[guess.charAt(4)]

        // if count of letter > 1
        if (occurrenceCount > 1) {console.log("The fifth letter doesn't appear in the word twice")}

        // if count of letter is only 1 do this
        else {console.log("The fifth letter apears in the word, but in a different position.")}
    }

}

wordle("sco$pe", "ab$de")

