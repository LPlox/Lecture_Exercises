// rewrite to ternary
let boolean = true;

boolean ? console.log("statement is true") : console.log("statement is false");

// rewrite to ternary
boolean ? executeIfTrue() : executeIfFalse();

function executeIfTrue() {
	console.log("statement is true");
}

function executeIfFalse() {
	console.log("statement is false");
}
