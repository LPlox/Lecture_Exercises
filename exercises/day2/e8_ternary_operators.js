/**
 * Add the objects together with ternary operator.
 * You can use the console.log() to test if the ternary is still running correctly.
 */

// rewrite to ternary
let boolean = true;

if (boolean) {
	console.log("statement is true");
} else {
	console.log("statement is false");
}

// rewrite to ternary
if (boolean) {
	executeIfTrue();
} else {
	executeIfFalse();
}

function executeIfTrue() {
	console.log("statement is true");
}

function executeIfFalse() {
	console.log("statement is false");
}
