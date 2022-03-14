// TODO:
// ----------------------------------------------------
// - MODULE: MOVE COMPARE FUNCTION TO SEPARATE FILE AND EXPORT
// - IMPORT INTO INDEX.JS
// - TESTING
//   - Create test strategy
//   - Create separate test-file
//   - Check Jest-documentation
//   - Document the test strategy with comments in test-code
//   - Create 2+ tests that verifies the compareFunction
//     - IF INPUT IS "CYKLA, HALLÅ", THEN OUTPUT IS EXPECTED TO BE:
//     - H / incorrect
//     - A / misplaced
//     - L / incorrect (eftersom det redan finns ett korrekt L)
//     - L / correct
//     - Å / incorrect
//     - TEST WITH SOME OTHER WORDS, E.G. CHECK "ILLER" AGAINST "HALLÅ"
// ----------------------------------------------------

// Assignment 1: Algorithm A
// An algorithm, function(s), that defines rules for feedback when player tries to guess what the correct word is.

  // Define the problem:
  // CONTEXT:
  // The user needs to come up with a word and needs to know how close the word is to the correct one
  // WHEN the user makes a guess (input)
  // THEN the user gets feedback (output) about how the guess compares to the correct answer

function compareStrings(answer, guess) {

  const answerArr = answer.split("");
  const guessArr = guess.split("");
  const output = [
    ...Array(5)
  ];

  console.log(`\nUntouched answer array: ${answerArr}`);
  console.log(`Untouched guess array:  ${guessArr}`);

  // The strings need to be looped through or similar i.e. with .map, forEach, for, or some string method? And for every index the value (letter) needs to be checked
  for (let i = 0; i < answerArr.length; i++) {
    if(guessArr[i] === answerArr[i]){
      console.log("\nChecking guess for CORRECT letters...")
      // This needs to go into the same index pos
      output.push({"letter": guessArr[i], "result": "correct"})
      console.log(`${guessArr[i]} is CORRECT! Deleting it from arrays...`)
      guessArr.splice([i], 1);
      answerArr.splice([i], 1);
      console.log(`Answer array is now: ${answerArr}`);
      console.log(`Guess array is now:  ${guessArr}`);
      } else if (answerArr.includes(guessArr[i])) {

      }
  }

  // for (let i = 0; i < answerArr.length; i++) {
  //   if(!answerArr.includes(guessArr[i])) {
  //     console.log("\nChecking guess for INCORRECT letters...");
  //     output.push({"letter": guessArr[i], "result": "incorrect"})
  //     console.log(`${guessArr[i]} is INCORRECT! Deleting it from arrays...`)
  //     guessArr.splice([i], 1);
  //     answerArr.splice([i], 1);
  //     console.log(`Answer array is now: ${answerArr}`);
  //     console.log(`Guess array is now:  ${guessArr}`);
  //   }
  // }

  // for (let i = 0; i < answerArr.length; i++) {
  //   if (guessArr[i] !== answerArr[i] && answerArr.includes(guessArr[i])){
  //     console.log("\nChecking guess for MISPLACED letters...");
  //     output.push({"letter": guessArr[i], "result": "misplaced"})
  //     console.log(`${guessArr[i]} is MISPLACED! Deleting it from arrays...`)
  //     guessArr.splice([i], 1);
  //     answerArr.splice([i], 1);
  //     console.log(`Answer array is now: ${answerArr}`);
  //     console.log(`Guess array is now:  ${guessArr}`);
  //   }
  // }

  console.log(output);

}

compareStrings("CYKLA", "CYKLA");

// compareStrings("CYKLA", "HALLÅ");
// compareStrings("HALLÅ", "ILLER");
// compareStrings("SPIRA", "PROPP");

// Problem:
// First 'L' gives wrong result, but the problem is that it's actually right according to the rule. So, what are viable options to solve this? Can the rule be changed? Iterate through "output" array and validate the results, and correct any that are 'wrong'? Or, if we later get to the same letter, a special rule gets applied that changes earlier result of same letter?

// pseudo:
// if (output.result for this letter = correct && same letter occurs earlier && output.result for that letter is misplaced) <then> {change result for that letter -> incorrect}

// Problem when splicing:
// Everything after 'correct' gets spliced
// Solution: Add "+1" OUTSIDE the "[]"
