/**
 * Logical operators (OR)
 * 70 COMPARISONS WITH THE LOGICAL OR OPERATOR
 * The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false. The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.
 *
 * TASK
 * Combine the two if statements into one statement which returns the string
 * Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
 */
function testLogicalOr(val) {
	// Only change code below this line

	if (val) {
		return "Outside";
	}

	if (val) {
		return "Outside";
	}

	// Only change code above this line
	return "Inside";
}

console.log(testLogicalOr(0)); //should return the string Outside
console.log(testLogicalOr(10)); // should return the string Inside
console.log(testLogicalOr(15)); // should return the string Inside
console.log(testLogicalOr(19)); // should return the string Inside
console.log(testLogicalOr(20)); // should return the string Inside
