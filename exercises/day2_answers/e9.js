// rewrite to ternary
let boolean = true;
let condition = false;

//Good to know but it's bad practice. Use normal if else statements instead.
boolean
	? condition
		? console.log("statement is true, condition is true")
		: console.log("statment is true, condition is false")
	: console.log("statement is false");
