/* *
 * If statements
 * 73 LOGICAL ORDER IN IF ELSE STATEMENTS
 * Order is important in if, else if statements.
 * The function is executed from top to bottom so you will want to be careful of what statement .
 */

function orderMyLogic(val) {
	if (val < 10) {
		return "Less than 10";
	} else if (val < 5) {
		return "Less than 5";
	} else {
		return "Greater than or equal to 10";
	}
}

console.log(orderMyLogic(7));

/**
 * orderMyLogic(4) should return the string Less than 5
 */
