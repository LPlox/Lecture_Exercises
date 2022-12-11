/**
 * Return 
 * 81 RETURN EARLY PATTERN FOR FUNCTION
 * When a return statement is reached, the execution of the current 
 * function stops and control returns to the calling location.
 * 
 * TASK
 * Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
 * Hint
Remember that undefined is a keyword, not a string.
 */

// Setup
function abTest(a, b) {
  // Only change code below this line
  
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2)); //should return 8
console.log(abTest(-2, 2)); //should return undefined
console.log(abTest(2, -2)); //should return undefined
