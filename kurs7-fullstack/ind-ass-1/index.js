// Assignment 1: Algorithm A
// An algorithm, function(s), that defines rules for feedback when player tries to guess what the correct word is.

// Define the problem:
// CONTEXT:
// The user needs to come up with a word and needs to know how close the word is to the correct one
// WHEN the user makes a guess (input)
// THEN the user gets feedback (output) about how the guess compares to the correct answer

// Input should be two words (strings)
function compareStrings(guess, answer) {
  // Compare guess with answer, letter by letter
  // To check the strings, letter by letter, maybe the strings need to be split into arrays first? If not, then it might be easier anyway because the output has to be an array with objects.
  // And store the arrays in one variable each

   // Unsure of how to split them between letters though?

  const guessArr = guess.split();

  const answerArr = answer.split();

  // The strings need to be mapped through or similar i.e. with .map, forEach, for, or some string method?
  guessArr.map
  answerArr.map

 // And the same index pos in both strings need to be compared with each other, if they have same letter

 // FOR EACH letter in guess, we actually need to do several comparisons / checks against answer
// The games feedback rules are as follows:
  // if the letter can be found in answer, on same place (index) = correct;
  if (letter in guess-string = present in answer-string && same index) {
  result = "correct";
  }
  // if the letter cannot be found = incorrect;
  if (letter = !present in answer-string) {
  result = "incorrect";
  }
  // if the letter can be found, but in another place / index = misplaced;
  if (letter = present in answer string && !same index) {
  result = "misplaced";
  }

  // And somehow store result in the output array object
  // Unsure how to store the result from comparing EACH SEPARATE LETTER, in separate output objects, in the output array

  // Output has to be an array
  const output = [
    // with one object for each letter in same order as guess, with the following attributes:
    // letter: <the letter>
    {letter: }
    // result with one of correct, incorrect or misplaced
    // this must be
    {result: }
    {}

    // result: incorrect, misplaced, correct
      ]
}

compareStrings("CYKLA", "HALLÅ");

// test strategy
// IF INPUT IS "CYKLA, HALLÅ", THEN OUTPUT IS EXPECTED TO BE:
// H / incorrect
// A / misplaced
// L / incorrect (eftersom det redan finns ett korrekt L)
// L / correct
// Å / incorrect

// create 2+ tests that verifies the function

// document the test strategy with comments in test-code
