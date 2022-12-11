/**
 * Logical operators (AND)
 * 69 COMPARISONS WITH THE LOGICAL AND OPERATOR
 * Sometimes you will need to test more than one thing at a time. 
 * The logical and operator (&&) returns true if and only if the 
 * operands to the left and right of it are true.
 * 
 * TASK
 * Replace the two if statements with one statement, using the && operator, 
 * which will return the string Yes if val is less than or equal to 50 and 
 * greater than or equal to 25. Otherwise, will return the string No.
 */


function testLogicalAnd(val) {
  // Only change code below this line

  // Only change code above this line
  return "No";
}


console.log(testLogicalAnd(25)) //should return the string Yes
console.log(testLogicalAnd(24)) //should return the string Yes
console.log(testLogicalAnd(51)) //should return the string No
console.log(testLogicalAnd(50)) //should return the string Yes
console.log(testLogicalAnd(80)) //should return the string No