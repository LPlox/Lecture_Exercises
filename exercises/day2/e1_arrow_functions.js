/**
 * Writing these functions into arrow functions
 * You can use the console.log() to test if the function is still running correctly.
 * The goal is rewritting the function and not getting the right console.log this time.
 */

function multiply(x, y) {
	return x * y;
}

// console.log(multiply(8, 9));

const square = function (number) {
	return number * number;
};

// console.log(square(4));

function isPositive(number) {
	return number >= 0;
}

// console.log(isPositive(-2));

function randomNumber() {
	return Math.random();
}

// console.log(randomNumber());
