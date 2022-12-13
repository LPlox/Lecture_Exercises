/**
 * Writing these functions into arrow functions
 * You can use the console.log() to test if the function is still running correctly.
 * The goal is rewritting the function and not getting the right console.log this time.
 * These ones are harder!!
 */

const countRange = function (min, max) {
	let x = min;
	while (x !== max) {
		console.log(x);
		x++;
	}
};

// countRange(2, 9);

document.addEventListener("click", function () {
	// anonymous functions
	console.log("Click");
});
