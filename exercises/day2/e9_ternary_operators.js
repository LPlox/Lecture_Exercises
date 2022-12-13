/**
 * Add the objects together with spread operator.
 * You can use the console.log() to test if the ternary is still running correctly.
 * Hard!
 */

// rewrite to ternary
let boolean = true;
let condition = false;

if (boolean) {
	console.log("statement is true");
	if (condition) {
		console.log("condition is true");
	} else {
		console.log("condition is false");
	}
} else {
	console.log("statement is false");
}

//should return "statement is true" and "condition is false"
